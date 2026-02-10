import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Home() {
  const trustItems = [
    { text: 'Licensed & Insured' },
    { text: '24/7 Emergency Service' },
    { text: 'Locally Owned & Operated' },
    { text: 'Satisfaction Guarantee' }
  ];

  return (
    <>
      <Head>
        <title>Top Tier Electrical | West MI Electricians</title>
        <meta name="description" content="Top Tier Electrical provides trusted residential and commercial electrician services across West Michigan. Licensed, insured, and available 24/7 for emergency repairs." />
      </Head>
      <Header />
      <Hero
        title="Top Tier Electrical"
        subtitle="Professional Residential & Commercial Electricians Serving West Michigan"
        imageSrc="/images/hero.jpg"
        imageAlt="Electrician working on an electrical panel"
        actions={[{ label: 'Request a Service', href: '/contact' }]}
      />
      <TrustStrip items={trustItems} />
      <Form formId="home-contact-form" />
      <Footer />
    </>
  );
}
