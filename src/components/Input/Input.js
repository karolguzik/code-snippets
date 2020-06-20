import React from 'react'
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({ tag: Tag, name, onChange }) => {
  return(
    <Tag
      className={Tag === 'textarea' ? styles.textarea : styles.input}
      type='text'
      name={name}
      id={name}
      placeholder={name}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  tag: 'input',
}


export default Input;