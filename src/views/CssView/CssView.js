import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';

const CssView = ({appContext: { css, filteredSnippets }}) => {
  const snippets = filteredSnippets ? filteredSnippets : css;
  return(
    <List items={snippets} />
  )
}

export default withContext(CssView);