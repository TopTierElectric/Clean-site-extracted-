import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Head from 'next/head';

const testimonials = [
  {
    name: 'Sarah P.',
    text: 'Top Tier Electrical upgraded our panel and installed new lighting. They were professional, on time, and answered all our questions. Highly recommend!'
  },
  {
    name: 'Mark T.',
    text: 'Fast and friendly service. Fixed our electrical issue in no time and gave useful advice to prevent future problems. Great experience!'
  },
  {
    name: 'Linda G.',
    text: 'We lost power during a storm and Top Tier came out at 2 AM to help. Lifesavers! Very grateful for their prompt emergency service.'
  }
];

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Customer Testimonials | Top Tier Electrical</title>
        <meta name="description" content="Read reviews and testimonials from Top Tier Electrical customers. See why homeowners and businesses in West Michigan trust us for their electrical needs." />
      </Head>
      <Header />
      <Hero
        title="Customer Testimonials"
        subtitle="Hear from our customers about their experience with Top Tier Electrical."
      />
      <section className="container">
        {testimonials.map((t, idx) => (
          <blockquote key={idx} className="testimonial">
            <p>"{t.text}"</p>
            <footer>– {t.name}</footer>
          </blockquote>
        ))}
      </section>
      <Footer />
    </>
  );
}
