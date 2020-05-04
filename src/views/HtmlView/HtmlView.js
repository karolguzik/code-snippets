import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const HtmlView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List items={context.html} />
    )}
  </AppContext.Consumer>
)

export default HtmlView;