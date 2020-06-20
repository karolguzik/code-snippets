import React from 'react';
import styles from './Form.module.scss';
import nextId from 'react-id-generator';
import withContext from '../../hoc/withContext';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import InputRadio from '../Input/InputRadio';
import Button from '../Button/Button';

const types = {
  html: 'html',
  css: 'css',
  javascript: 'javascript',
  react: 'react',
};

class Form extends React.Component {
  state = {
    snippet: {
      type: this.props.location.pathname.split('/')[1],
      title: '',
      description: '',
      code: '',
      id: nextId(),
    },
    validationError: false,
  };

  handleRadioInputChange = (type) => {
    const { snippet } = this.state;
    this.setState({
      snippet: { ...snippet, type: type },
    });
  };

  handleInputChange = (e) => {
    const { snippet } = this.state;
    this.setState({
      snippet: { ...snippet, [e.target.name]: e.target.value },
    });
  };

  handleOnSubmit = (e, snippet) => {
    e.preventDefault();
    const {
      appContext: { addSnippet },
      history: { push },
    } = this.props;
    const { title, description, code, type } = this.state.snippet;

    if (
      title === '' ||
      description === '' ||
      code === '' ||
      type === '' ||
      type === 'snippet'
    ) {
      this.validateFormError();
    } else {
      addSnippet(e, snippet);
      push(`/${snippet.type}`);
    }
  };

  validateFormError = () => {
    this.setState({
      validationError: true,
    });

    setTimeout(() => {
      this.setState({
        validationError: false,
      });
    }, 2000);
  };

  render() {
    const {
      snippet,
      snippet: { type },
      validationError,
    } = this.state;
    console.log(this.state);
    return (
      <form
        className={styles.form}
        onSubmit={(e) => this.handleOnSubmit(e, snippet)}
        autoComplete='off'
      >
        <div className={styles.radioInputContainer}>
          <InputRadio
            name='html'
            checked={type === types.html}
            onChange={() => this.handleRadioInputChange(types.html)}
          />
          <InputRadio
            name='css'
            checked={type === types.css}
            onChange={() => this.handleRadioInputChange(types.css)}
          />
          <InputRadio
            name='javascript'
            checked={type === types.javascript}
            onChange={() => this.handleRadioInputChange(types.javascript)}
          />
          <InputRadio
            name='react'
            checked={type === types.react}
            onChange={() => this.handleRadioInputChange(types.react)}
          />
        </div>
        <Input name='title' onChange={this.handleInputChange} />
        <Input
          tag='textarea'
          name='description'
          onChange={this.handleInputChange}
        />
        <Input tag='textarea' name='code' onChange={this.handleInputChange} />
        {validationError ? (
          <p className={styles.validationErrorMessage}>
            You have to fill up all blanks.
          </p>
        ) : null}
        <Button btnForm>Add</Button>
      </form>
    );
  }
}

Form.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  appContext: PropTypes.shape({
    addSnippet: PropTypes.func.isRequired,
  }).isRequired,
};

export default withContext(withRouter(Form));
