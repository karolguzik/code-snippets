import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './context/context';
import Header from './components/Header/Header';
import WelcomeView from './views/WelcomeView/WelcomeView';
import HtmlView from './views/HtmlView/HtmlView';
import CssView from './views/CssView/CssView';
import JavascriptView from './views/JavaScriptView/JavascriptView';
import ReactView from './views/ReactView/ReactView';
import SnippetView from './views/SnippetView/SnippetView';
import Modal from './components/Modal/Modal';


class App extends React.Component {
  state = {
    html: [],
    css: [],
    javascript: [],
    react: [],
    filteredSnippets: null,
    isModalOpen: false,
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
    console.log(this.state)
    let { html, css, javascript, react } = this.state;
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
      <BrowserRouter>
        <AppContext.Provider value={context}>
          <Header />
          <Switch>
            <Route exact path="/" component={WelcomeView} />
            <Route path="/html" component={HtmlView}/>
            <Route path="/snippet/:id" component={SnippetView}/>
            <Route path="/css" component={CssView}/>
            <Route path="/javascript" component={JavascriptView}/>
            <Route path="/react" component={ReactView}/>
          </Switch>
          {this.state.isModalOpen && <Modal />}
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App;
