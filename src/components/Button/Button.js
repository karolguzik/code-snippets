import React from 'react';
import styles from './Button.module.scss';
import withContext from '../../hoc/withContext';

const Button = ({ appContext: { openModal } }) => (
    <button className={styles.button} onClick={openModal}>Add snippet</button>
  )

export default withContext(Button);