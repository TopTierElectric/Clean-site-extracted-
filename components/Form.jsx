import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAttribution } from '@/providers/AttributionProvider';
import { useAnalytics } from '@/providers/AnalyticsProvider';

export default function Form({ formId = '' }) {
  const { attributionData } = useAttribution();
  const { trackEvent } = useAnalytics();
  const [status, setStatus] = useState('IDLE');
  const [clientError, setClientError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClientError('');
    setStatus('SUBMITTING');

    const formData = new FormData(e.target);
    const email = (formData.get('email') || '').toString().trim();
    const phone = (formData.get('phone') || '').toString().trim();

    if (!email && !phone) {
      setStatus('IDLE');
      setClientError('Please provide either an email address or a phone number.');
      return;
    }

    Object.entries(attributionData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('page', window.location.href);

    try {
      const res = await fetch('/api/form', { method: 'POST', body: formData });
      if (res.ok) {
        trackEvent('form_submit_success', { formId });
        window.location.href = '/thank-you';
        return;
      }
      setStatus('ERROR');
    } catch {
      setStatus('ERROR');
    }
  };

  return (
    <form className="contact-form container" onSubmit={handleSubmit}>
      <h2>Get a Free Estimate</h2>
      <p>Fill out the form below, and we’ll contact you to discuss your needs.</p>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name*</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" />
        </div>
        <div className="form-field">
          <label htmlFor="service">Service Needed</label>
          <input id="service" name="service" type="text" placeholder="e.g. Panel upgrade, lighting install" />
        </div>
        <div className="form-field full">
          <label htmlFor="message">How can we help?*</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
      </div>
      <input type="text" name="company" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="turnstile-field">
        <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} data-theme="light" />
      </div>
      <button type="submit" className="btn-primary" disabled={status === 'SUBMITTING'}>
        {status === 'SUBMITTING' ? 'Submitting...' : 'Submit'}
      </button>
      {clientError && <p className="form-error">{clientError}</p>}
      {status === 'ERROR' && <p className="form-error">Sorry, something went wrong. Please try again.</p>}
    </form>
  );
}

Form.propTypes = {
  formId: PropTypes.string
};
