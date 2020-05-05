import React from 'react';
import styles from './Button.module.scss';
import AppContext from '../../context';

const Button = () => (
    <AppContext.Consumer>
      {(context) => (
          <button className={styles.button} onClick={context.openModal}>Add snippet</button>
      )}
    </AppContext.Consumer>
  )

export default Button;