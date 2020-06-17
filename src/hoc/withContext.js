import React from 'react';
import AppContext from '../context/context';

const withContext = Component => {
  return function contextComponent(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} appContext={context} />}
      </AppContext.Consumer>
    );
  };
};

export default withContext;
