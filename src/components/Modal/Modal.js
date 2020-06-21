import React from 'react';
import styles from './Modal.module.scss';
import withContext from '../../hoc/withContext';
import Form from '../Form/Form';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

const Modal = ({appContext: { closeModal }}) => (
  <div className={styles.wrapper}>
    <div className={styles.modal}>
      <Button tag='div' btnCloseModal onClick={closeModal}></Button>
      <Heading tag='h2'>Create your snippet!</Heading>
      <Form />
    </div>
  </div>
)

Modal.propTypes = {
  appContext: PropTypes.shape({
    closeModal: PropTypes.func.isRequired,
  })
}

export default withContext(Modal);