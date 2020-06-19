import React from 'react';
import nextId from 'react-id-generator';
import styles from './Form.module.scss';
import withContext from '../../hoc/withContext';
import { withRouter } from 'react-router-dom';

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
    this.setState({
      snippet: { ...this.state.snippet, type: type },
    });
  };

  handleInputChange = (e) => {
    this.setState({
      snippet: { ...this.state.snippet, [e.target.name]: e.target.value },
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
    console.log(this.state);
    console.log(this.props);
    return (
      <form
        className={styles.form}
        onSubmit={(e) => this.handleOnSubmit(e, this.state.snippet)}
        autoComplete='off'
      >
        <div className={styles.radioInputContainer}>
          <div>
            <input
              type='radio'
              name='html'
              id='html'
              value='html'
              checked={this.state.snippet.type === types.html}
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
              checked={this.state.snippet.type === types.css}
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
              checked={this.state.snippet.type === types.javascript}
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
              checked={this.state.snippet.type === types.react}
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
        {this.state.validationError ? (
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

export default withContext(withRouter(Form));
