import '@/styles/globals.css';
import Head from 'next/head';
import { AnalyticsProvider } from '@/providers/AnalyticsProvider';
import { AttributionProvider } from '@/providers/AttributionProvider';

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: 'Top Tier Electrical',
  url: 'https://toptier-electrical.com',
  telephone: '+1-269-350-5158',
  image: 'https://toptier-electrical.com/images/hero.jpg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '117 Acorn St',
    addressLocality: 'Allegan',
    addressRegion: 'MI',
    postalCode: '49010',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.5295,
    longitude: -85.8553
  },
  openingHours: ['Mo-Su 00:00-23:59'],
  servesCuisine: 'n/a',
  areaServed: 'West Michigan',
  sameAs: [
    'https://www.facebook.com/toptiermi',
    'https://www.linkedin.com/company/top-tier-electrical'
  ]
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </Head>
      <AnalyticsProvider>
        <AttributionProvider>
          <Component {...pageProps} />
        </AttributionProvider>
      </AnalyticsProvider>
    </>
  );
}
