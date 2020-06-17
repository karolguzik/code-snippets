import React from 'react';
import styles from './Modal.module.scss';
import withContext from '../../hoc/withContext';
import Form from '../Form/Form';

const Modal = ({appContext: { closeModal }}) => (
  <div className={styles.modal}>
    <div className={styles.modalCloseBtn} onClick={closeModal}></div> 
    <h2 className={styles.heading}>Create your snippet!</h2>
    <Form />
  </div>
)


export default withContext(Modal);