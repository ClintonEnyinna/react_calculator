import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, color, wide }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color, width: wide ? '50%' : null }}
      type="button"
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  color: '#f5913f',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
