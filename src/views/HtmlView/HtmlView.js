import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';

const HtmlView = ({appContext: { html, filteredSnippets }}) => {
  const snippets = filteredSnippets ? filteredSnippets : html;
  return(
    <List items={snippets} />
  )
}


export default withContext(HtmlView);