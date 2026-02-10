/**
 * Cloudflare Pages Function: /api/form
 */
export async function onRequestPost({ request, env, waitUntil }) {
  const url = new URL(request.url);
  const origin = request.headers.get('Origin') || '';
  if (origin && origin !== url.origin) {
    return new Response('Invalid origin', { status: 403 });
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return new Response('Invalid form payload', { status: 400 });
  }

  const honeypot = (form.get('company') || '').toString().trim();
  if (honeypot) return new Response('Blocked', { status: 403 });

  const turnstileToken = (form.get('cf-turnstile-response') || '').toString();
  if (!turnstileToken) return new Response('Missing Turnstile token', { status: 400 });
  if (!env.TURNSTILE_SECRET_KEY) return new Response('Server misconfigured (missing Turnstile secret)', { status: 500 });

  const verifyBody = new URLSearchParams();
  verifyBody.set('secret', env.TURNSTILE_SECRET_KEY);
  verifyBody.set('response', turnstileToken);

  const ip = request.headers.get('CF-Connecting-IP') || '';
  if (ip) verifyBody.set('remoteip', ip);

  const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: verifyBody,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  const verifyJson = await verifyRes.json().catch(() => null);
  if (!verifyJson?.success) {
    return new Response('Turnstile verification failed', { status: 403 });
  }

  const name = (form.get('name') || '').toString().trim();
  const email = (form.get('email') || '').toString().trim();
  const phone = (form.get('phone') || '').toString().trim();
  const message = (form.get('message') || form.get('details') || '').toString().trim();
  const service = (form.get('service') || '').toString().trim();
  const lane = (form.get('lane') || '').toString().trim();

  if (!name || (!email && !phone) || !message) {
    return new Response('Missing required fields', { status: 400 });
  }

  const submission = {
    id: crypto.randomUUID(),
    received_at: new Date().toISOString(),
    page: (form.get('page') || request.headers.get('Referer') || '').toString(),
    name,
    email,
    phone,
    message,
    service,
    lane,
    utm: {
      source: (form.get('utm_source') || '').toString(),
      medium: (form.get('utm_medium') || '').toString(),
      campaign: (form.get('utm_campaign') || '').toString(),
      content: (form.get('utm_content') || '').toString(),
      term: (form.get('utm_term') || '').toString(),
      gclid: (form.get('gclid') || '').toString()
    }
  };

  if (env.FORM_SUBMISSIONS) {
    waitUntil(env.FORM_SUBMISSIONS.put(`submission:${submission.id}`, JSON.stringify(submission)));
  }

  if (env.ZAPIER_WEBHOOK_URL) {
    waitUntil(fetch(env.ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission)
    }));
  }

  return Response.redirect(`${url.origin}/thank-you`, 303);
}
