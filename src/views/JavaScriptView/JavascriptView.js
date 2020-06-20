import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';
import PropTypes from 'prop-types';

const JavascriptView = ({appContext: { javascript, filteredSnippets }}) => {
  const snippets = filteredSnippets ? filteredSnippets : javascript;
  return(
    <List items={snippets} />
  )
}

JavascriptView.propTypes = {
  appContext: PropTypes.shape({
    javascript: PropTypes.array,
    filteredSnippets: PropTypes.array,
  })
}

export default withContext(JavascriptView);