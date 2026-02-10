import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | Top Tier Electrical</title>
        <meta name="description" content="Thank you for contacting Top Tier Electrical. We have received your submission and will respond shortly." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />
      <main className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h1>Thank You!</h1>
        <p>Your submission has been received. We will be in touch with you shortly.</p>
        <p><a href="/">Return to Home Page</a></p>
      </main>
      <Footer />
    </>
  );
}
