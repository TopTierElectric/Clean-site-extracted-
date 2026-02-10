import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Head from 'next/head';

const pagesContent = {
  'electrical-repairs': {
    title: 'Electrical Repairs & Troubleshooting',
    intro: 'Find the source of electrical problems and restore safe, reliable power.',
    heroCTA: { label: 'Schedule Service', href: '/booking' },
    contentHtml: `
      <section class="container">
        <h3>What’s Not Included (Unless Scoped)</h3>
        <ul>
          <li>Large remodel rewiring or whole-home rewires.</li>
          <li>Extensive knob-and-tube or aluminum wiring replacements (assessed separately).</li>
          <li>Major panel or service upgrades (see our Panel Upgrades service).</li>
        </ul>
      </section>
    `
  },
  generators: {
    title: 'Generator Sales & Installation',
    intro: 'Backup power solutions installed safely and sized correctly for your needs, so you can keep the lights on during any outage.',
    heroCTA: { label: 'Request a Quote', href: '/contact' },
    contentHtml: '<section class="container"><p>Whole-home and standby generator options for residential and commercial properties.</p></section>'
  },
  'panel-upgrades': {
    title: 'Electrical Panel Upgrades',
    intro: 'Upgrade outdated panels to improve safety, capacity, and reliability.',
    heroCTA: { label: 'Book an Inspection', href: '/booking' },
    contentHtml: '<section class="container"><p>We evaluate load demand and install code-compliant panel upgrades tailored to your property.</p></section>'
  },
  'ev-chargers': {
    title: 'EV Charger Installation',
    intro: 'Convenient home and business EV charging solutions installed correctly the first time.',
    heroCTA: { label: 'Get EV Quote', href: '/contact' },
    contentHtml: '<section class="container"><p>Level 2 EV charging installs with proper circuit sizing and permitting support.</p></section>'
  },
  lighting: {
    title: 'Lighting Improvements',
    intro: 'Indoor, outdoor, and energy-efficient lighting improvements for better comfort and visibility.',
    heroCTA: { label: 'Start Your Project', href: '/contact' },
    contentHtml: '<section class="container"><p>From LED retrofits to landscape lighting, we deliver practical lighting upgrades.</p></section>'
  },
  'energy-solutions': {
    title: 'Energy Solutions',
    intro: 'Practical upgrades and consulting that help reduce waste and lower utility costs.',
    heroCTA: { label: 'Request Consultation', href: '/contact' },
    contentHtml: '<section class="container"><p>Energy-focused electrical improvements for residential and commercial spaces.</p></section>'
  }
};

export default function ServicePage({ service }) {
  return (
    <>
      <Head>
        <title>{service.title} | Top Tier Electrical</title>
        <meta name="description" content={service.intro} />
      </Head>
      <Header />
      <Hero
        title={service.title}
        subtitle={service.intro}
        imageSrc={service.imageSrc || null}
        actions={service.heroCTA ? [service.heroCTA] : []}
      />
      <div dangerouslySetInnerHTML={{ __html: service.contentHtml }} />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(pagesContent).map((slug) => ({ params: { service: slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      service: pagesContent[params.service]
    }
  };
}
