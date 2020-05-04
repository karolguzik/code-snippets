import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './context';
import Header from './components/Header/Header';
import HtmlView from './views/HtmlView/HtmlView';
import CssView from './views/CssView/CssView';
import JavascriptView from './views/JavaScriptView/JavaScriptView';
import ReactView from './views/ReactView/ReactView';

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
  }

  render() {
    const context = {
      ...this.state,
    }

    console.log(context);

    return (
      <BrowserRouter>
        <AppContext.Provider value={context}>
          <Header />
          <Switch>
            <Route exact path="/" component={HtmlView}/>
            <Route path="/css" component={CssView}/>
            <Route path="/javascript" component={JavascriptView}/>
            <Route path="/react" component={ReactView}/>
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App;
