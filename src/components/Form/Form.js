import React from 'react';
import nextId from 'react-id-generator';
import styles from './Form.module.scss';
import withContext from '../../hoc/withContext';

const types = {
  html: 'html',
  css: 'css',
  javascript: 'javascript',
  react: 'react',
};

class Form extends React.Component {
  state = {
    type: types.html,
    title: '',
    description: '',
    code: '',
    id: nextId(),
  };

  handleRadioInputChange = (type) => {
    this.setState({
      type: type,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { addSnippet } = this.props.appContext;
    return (
      <form
        className={styles.form}
        onSubmit={(e) => addSnippet(e, this.state)}
        autoComplete='off'
      >
        <div className={styles.radioInputContainer}>
          <div>
            <input
              type='radio'
              name='html'
              id='html'
              value='html'
              checked={this.state.type === types.html}
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
              checked={this.state.type === types.css}
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
              checked={this.state.type === types.javascript}
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
              checked={this.state.type === types.react}
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
        <button
          className={styles.button}
          type='submit'
        >
          Add
        </button>
      </form>
    );
  }
}

export default withContext(Form);
