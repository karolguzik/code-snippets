import React from 'react';
import styles from './Button.module.scss';
import withContext from '../../hoc/withContext';
import PropTypes from 'prop-types'

const Button = ({ appContext: { openModal } }) => (
    <button className={styles.button} onClick={openModal}>Add snippet</button>
  )

Button.propTypes = {
  appContext: PropTypes.shape({
    openModal: PropTypes.func.isRequired,
  })
}

export default withContext(Button);