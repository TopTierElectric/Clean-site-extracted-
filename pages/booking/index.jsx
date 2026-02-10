import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Booking() {
  return (
    <>
      <Head>
        <title>Schedule Service | Top Tier Electrical</title>
        <meta name="description" content="Schedule an appointment with Top Tier Electrical. Use our online booking system to choose a convenient date and time for your electrical service." />
      </Head>
      <Header />
      <Hero
        title="Schedule Service Online"
        subtitle="Choose a convenient date and time for your electrical service appointment. We’ll confirm your booking promptly."
        imageSrc="/images/booking.jpg"
        imageAlt="Scheduling calendar for electrical service"
      />
      <Footer />
    </>
  );
}
