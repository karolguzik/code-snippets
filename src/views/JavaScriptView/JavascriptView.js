import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const JavascriptView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List items={context.javascript} />
    )}
  </AppContext.Consumer>
)

export default JavascriptView;