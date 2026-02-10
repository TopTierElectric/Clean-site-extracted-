import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Top Tier Electrical</title>
        <meta name="description" content="Get in touch with Top Tier Electrical. Call, text, or fill out our contact form to schedule service or request a quote from our licensed electricians." />
      </Head>
      <Header />
      <Hero
        title="Get in Touch"
        subtitle="Our team is ready to help with your electrical needs. Contact us by phone, text, or fill out the form below."
        actions={[
          { label: 'Call Us', href: 'tel:12693505158' },
          { label: 'Text Us', href: 'sms:12693505158' }
        ]}
        imageSrc="/images/contact.jpg"
        imageAlt="Electrician answering phone calls"
      />
      <Form formId="contact-form" />
      <Footer />
    </>
  );
}
