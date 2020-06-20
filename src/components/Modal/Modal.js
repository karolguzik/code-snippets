import React from 'react';
import styles from './Modal.module.scss';
import withContext from '../../hoc/withContext';
import Form from '../Form/Form';
import PropTypes from 'prop-types';

const Modal = ({appContext: { closeModal }}) => (
  <div className={styles.modal}>
    <div className={styles.modalCloseBtn} onClick={closeModal}></div> 
    <h2 className={styles.heading}>Create your snippet!</h2>
    <Form />
  </div>
)

Modal.propTypes = {
  appContext: PropTypes.shape({
    closeModal: PropTypes.func.isRequired,
  })
}

export default withContext(Modal);