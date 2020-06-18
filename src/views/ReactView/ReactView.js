import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';

const ReactView = ({appContext: { react, filteredSnippets }}) => {
  const snippets = filteredSnippets ? filteredSnippets : react;
  return(
    <List items={snippets} />
  )
}

export default withContext(ReactView);