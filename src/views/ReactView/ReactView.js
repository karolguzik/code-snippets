import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ReactView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List items={context.react} />
    )}
  </AppContext.Consumer>
)

export default ReactView;