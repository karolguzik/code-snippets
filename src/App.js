import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppContext from './context/context';
import Header from './components/Header/Header';
import WelcomeView from './views/WelcomeView/WelcomeView';
import HtmlView from './views/HtmlView/HtmlView';
import CssView from './views/CssView/CssView';
import JavascriptView from './views/JavaScriptView/JavascriptView';
import ReactView from './views/ReactView/ReactView';
import SnippetView from './views/SnippetView/SnippetView';
import Modal from './components/Modal/Modal';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    html: [],
    css: [],
    javascript: [],
    react: [],
    filteredSnippets: null,
    isModalOpen: false,
  }

  componentDidUpdate = (prevProps) => {
    const { location } = this.props;
    if(location !== prevProps.location) {
      this.resetFilteredSnippets();
    }
  }

  addSnippet = (e, snippet) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [snippet.type]: [...prevState[snippet.type], snippet]
    }))

    this.closeModal();
  }

  deleteSnippet = (type, id) => {
    const snippets = this.state[type];
    const filteredSnippets = snippets.filter(snippet => snippet.id !== id)

    this.setState({
      [type]: filteredSnippets
    })
  }

  searchSnippet = (snippets) => {
    this.setState({
      filteredSnippets: snippets
    })
  }

  resetFilteredSnippets = () => {
    this.setState({
      filteredSnippets: null
    })
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    let { html, css, javascript, react, isModalOpen } = this.state;
    let allSnippets = [...html, ...css,...javascript,...react];

    const context = {
      ...this.state,
      allSnippets: allSnippets,
      openModal: this.openModal,
      closeModal: this.closeModal,
      addSnippet: this.addSnippet,
      deleteSnippet: this.deleteSnippet,
      searchSnippet: this.searchSnippet,
    }

    return (
      <AppContext.Provider value={context}>
        <Header />
        <Switch>
          <Route exact path="/" component={WelcomeView} />
          <Route path="/html" component={HtmlView} />
          <Route path="/snippet/:id" component={SnippetView} />
          <Route path="/css" component={CssView} />
          <Route path="/javascript" component={JavascriptView} />
          <Route path="/react" component={ReactView} />
        </Switch>
        {isModalOpen && <Modal />}
      </AppContext.Provider>
    )
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(App);
