import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';

const JavascriptView = ({appContext: { javascript, filteredSnippets }}) => {
  const snippets = filteredSnippets ? filteredSnippets : javascript;
  return(
    <List items={snippets} />
  )
}

export default withContext(JavascriptView);