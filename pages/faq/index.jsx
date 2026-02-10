import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Head from 'next/head';

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'We offer a full range of residential and commercial electrical services including panel upgrades, EV charger installation, lighting retrofits, repairs, and more.'
  },
  {
    question: 'Do you offer emergency electrical services?',
    answer: 'Yes. Our licensed electricians are available 24 hours a day for urgent electrical issues such as power outages, sparks, or burning smells.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Top Tier Electrical is fully licensed and insured to operate in Michigan and follows all local codes and regulations.'
  },
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can book online using our booking form, call us at 269‑350‑5158, or send us a text. We’ll confirm your appointment quickly.'
  }
];

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ | Top Tier Electrical</title>
        <meta name="description" content="Answers to frequently asked questions about Top Tier Electrical’s services, emergency response, licensing, and scheduling." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer }
              }))
            })
          }}
        />
      </Head>
      <Header />
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and business."
        imageSrc="/images/faq.jpg"
        imageAlt="FAQ for electrician services"
      />
      <section className="container">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
