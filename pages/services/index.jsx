import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Link from 'next/link';

const services = [
  {
    slug: 'panel-upgrades',
    title: 'Electrical Panel Upgrades',
    description: 'Upgrade your old electrical panel to meet today’s power demands and ensure safety and compliance.'
  },
  {
    slug: 'ev-chargers',
    title: 'EV Charger Installation',
    description: 'Install Level 2 EV chargers at your home or business, professionally and safely, for convenient vehicle charging.'
  },
  {
    slug: 'lighting',
    title: 'Lighting Improvements',
    description: 'From LED retrofits to landscape lighting, we illuminate your space with efficiency and style.'
  },
  {
    slug: 'electrical-repairs',
    title: 'Electrical Repairs',
    description: 'Troubleshoot and fix electrical problems to restore safe, reliable power in your home or business.'
  },
  {
    slug: 'generators',
    title: 'Generator Installation',
    description: 'Backup power solutions sized correctly and installed safely to keep your lights on during outages.'
  },
  {
    slug: 'energy-solutions',
    title: 'Energy Solutions',
    description: 'Practical energy-saving installations and consultations to improve efficiency and reduce costs.'
  }
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Electrical Services | Top Tier Electrical</title>
        <meta name="description" content="Explore the wide range of electrical services offered by Top Tier Electrical, including panel upgrades, EV charger installation, lighting improvements, electrical repairs, generators, and more." />
      </Head>
      <Header />
      <Hero
        title="Our Electrical Services"
        subtitle="Comprehensive solutions for homes and businesses – installation, upgrades, repairs, and emergency support."
        imageSrc="/images/services.jpg"
        imageAlt="Electrician team installing electrical equipment"
      />
      <section className="container">
        <ul className="service-list">
          {services.map((service) => (
            <li key={service.slug}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={`/${service.slug}`} className="btn-secondary">Learn More</Link>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}
