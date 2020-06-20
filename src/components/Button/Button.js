import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types'

const Button = ({tag: Tag, onClick, children, btnSnippet, btnForm, btnCloseModal}) => (
  <Tag className={btnCloseModal ? styles.buttonCloseModal : btnSnippet ? styles.buttonSnippet : btnForm ? styles.buttonForm : styles.buttonHeader} onClick={onClick}>{children}</Tag>
)

Button.propTypes = {
  tag: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
}

Button.defaultProps = {
  tag: 'button'
}

export default Button;
