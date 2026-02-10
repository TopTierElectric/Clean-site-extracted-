import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Emergency() {
  return (
    <>
      <Head>
        <title>24/7 Emergency Electrician | Top Tier Electrical</title>
        <meta name="description" content="Electrical emergency? Top Tier Electrical offers 24/7 emergency electrician services in West Michigan. Call us anytime for immediate assistance with power outages or hazardous situations." />
      </Head>
      <Header />
      <Hero
        title="Emergency Electrical Service"
        subtitle="Power outage or dangerous electrical issue? Our licensed electricians are on call 24/7 to help in any emergency."
        imageSrc="/images/emergency.jpg"
        imageAlt="Electrician fixing emergency electrical issue at night"
        actions={[{ label: 'Call 24/7 Hotline', href: 'tel:12693505158' }]}
      />
      <TrustStrip
        items={[
          { text: 'On-Call 24/7' },
          { text: 'Rapid Response Team' },
          { text: 'Safety First' },
          { text: 'Fully Equipped Vans' }
        ]}
      />
      <Footer />
    </>
  );
}
