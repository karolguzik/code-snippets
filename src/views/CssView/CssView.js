import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const CssView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List items={context.css} />
    )}
  </AppContext.Consumer>
)

export default CssView;