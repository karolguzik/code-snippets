import React from 'react';
import nextId from 'react-id-generator';
import styles from './Form.module.scss';
import withContext from '../../hoc/withContext';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    const { title, description, code } = this.state.snippet;

    if (title === '' || description === '' || code === '') {
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
    console.log(this.props);
    return (
      <form
        className={styles.form}
        onSubmit={(e) => this.handleOnSubmit(e, snippet)}
        autoComplete='off'
      >
        <div className={styles.radioInputContainer}>
          <div>
            <input
              type='radio'
              name='html'
              id='html'
              value='html'
              checked={type === types.html}
              onChange={() => this.handleRadioInputChange(types.html)}
            />
            <label htmlFor='html'>Html</label>
          </div>
          <div>
            <input
              type='radio'
              name='css'
              id='css'
              value='css'
              checked={type === types.css}
              onChange={() => this.handleRadioInputChange(types.css)}
            />
            <label htmlFor='css'>Css</label>
          </div>
          <div>
            <input
              type='radio'
              name='javascript'
              id='javascript'
              value='javascript'
              checked={type === types.javascript}
              onChange={() => this.handleRadioInputChange(types.javascript)}
            />
            <label htmlFor='javascript'>Javascript</label>
          </div>
          <div>
            <input
              type='radio'
              name='react'
              id='react'
              value='react'
              checked={type === types.react}
              onChange={() => this.handleRadioInputChange(types.react)}
            />
            <label htmlFor='react'>React</label>
          </div>
        </div>
        <input
          className={styles.input}
          type='text'
          name='title'
          id='title'
          placeholder='Title'
          onChange={this.handleInputChange}
        />
        <textarea
          className={styles.textarea}
          name='description'
          id='description'
          cols='50'
          rows='10'
          placeholder='Description'
          onChange={this.handleInputChange}
        ></textarea>
        <textarea
          className={styles.textarea}
          name='code'
          id='code'
          cols='50'
          rows='10'
          placeholder='Code'
          onChange={this.handleInputChange}
        ></textarea>
        {validationError ? (
          <p className={styles.validationErrorMessage}>
            You have to fill up all blanks.
          </p>
        ) : null}
        <button className={styles.button} type='submit'>
          Add
        </button>
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
