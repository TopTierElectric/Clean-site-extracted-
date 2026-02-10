import Image from 'next/image';
import PropTypes from 'prop-types';

export default function Hero({ title, subtitle, imageSrc, imageAlt = '', actions = [] }) {
  const hasImage = Boolean(imageSrc);
  return (
    <section className="section hero-section" style={{ backgroundColor: '#fff' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: hasImage ? '1fr 1fr' : '1fr', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h1>
          {subtitle && <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>{subtitle}</p>}
          {actions.length > 0 && (
            <p>
              {actions.map((action) => (
                <a key={action.href} href={action.href} className="btn-primary" style={{ marginRight: '1rem' }}>{action.label}</a>
              ))}
            </p>
          )}
        </div>
        {hasImage && (
          <div>
            <Image src={imageSrc} alt={imageAlt} width={600} height={400} priority />
          </div>
        )}
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, href: PropTypes.string }))
};
