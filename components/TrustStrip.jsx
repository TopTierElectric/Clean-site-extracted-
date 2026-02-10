import PropTypes from 'prop-types';

export default function TrustStrip({ items }) {
  return (
    <div className="trust-strip">
      <div className="container">
        <div className="trust-items">
          {items.map((item) => (
            <div key={item.text} className="trust-item"><span>✓</span> {item.text}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

TrustStrip.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string.isRequired })).isRequired
};
