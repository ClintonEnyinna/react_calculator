import React from 'react';
import PropTypes from 'prop-types';

function Button({ name }) {
  return (
    <button className="btn" type="button">
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
