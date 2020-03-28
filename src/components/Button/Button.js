import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ callbackfunc, text }) => {
  const key = text.toLowerCase();
  return (
    <button
      onClick={() => callbackfunc(key)}
      className={styles.button}
      type="button"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  callbackfunc: PropTypes.func.isRequired,
};

export default Button;
