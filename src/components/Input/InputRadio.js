import React from 'react'
import './Input.module.scss';
import PropTypes from 'prop-types';

const InputRadio = ({ name, checked, onChange }) => {
  return(
  <div>
    <input
      type='radio'
      name={name}
      id={name}
      value={name}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={name}>{name.toUpperCase()}</label>
  </div>
  )
}

InputRadio.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputRadio;