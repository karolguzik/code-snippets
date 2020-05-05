import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './context';
import Header from './components/Header/Header';
import WelcomeView from './views/WelcomeView/WelcomeView';
import HtmlView from './views/HtmlView/HtmlView';
import CssView from './views/CssView/CssView';
import JavascriptView from './views/JavaScriptView/JavascriptView';
import ReactView from './views/ReactView/ReactView';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  state = {
    html: [
      {
        title: 'Html structure',
        description: 'Html is response for code of structure ...'
      },
      {
        title: 'Html structure',
        description: 'Html is response for code of structure ...'
      },
      {
        title: 'Html structure',
        description: 'Html is response for code of structure ...'
      }
    ],
    css: [],
    javascript: [],
    react: [],
    isModalOpen: true,
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
    const context = {
      ...this.state,
      openModal: this.openModal,
      closeModal: this.closeModal,
    }

    return (
      <BrowserRouter>
        <AppContext.Provider value={context}>
          <Header />
          <Switch>
            <Route exact path="/" component={WelcomeView} />
            <Route path="/html" component={HtmlView}/>
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
