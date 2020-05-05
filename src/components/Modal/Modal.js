import React from 'react';
import styles from './Modal.module.scss';
import AppContext from '../../context';

const Modal = () => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.modal}>
        <div className={styles.modalClose} onClick={context.closeModal}></div> 
        <h2 className={styles.heading}>Create your snippet!</h2>
      </div>
    )}
  </AppContext.Consumer>
)


export default Modal;