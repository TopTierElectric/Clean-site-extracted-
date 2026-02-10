import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Project Gallery | Top Tier Electrical</title>
        <meta name="description" content="Explore Top Tier Electrical’s project gallery. See photos of our recent residential and commercial electrical projects showcasing our quality workmanship and expertise." />
      </Head>
      <Header />
      <Hero
        title="Our Project Gallery"
        subtitle="Browse recent electrical projects completed by Top Tier Electrical for homeowners and businesses."
        imageSrc="/images/gallery-hero.jpg"
        imageAlt="Collage of completed electrical projects"
      />
      <section className="gallery-grid container">
        <img src="/images/gallery1.jpg" alt="Project: Installed home generator system" />
        <img src="/images/gallery2.jpg" alt="Project: Commercial lighting retrofit in warehouse" />
        <img src="/images/gallery3.jpg" alt="Project: Outdoor landscape lighting installation" />
        <img src="/images/gallery4.jpg" alt="Project: Electrical panel upgrade in residential home" />
      </section>
      <Footer />
    </>
  );
}
