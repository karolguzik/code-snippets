import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';
import PropTypes from 'prop-types';

const CssView = ({appContext: { css, filteredSnippets }}) => {
  const snippets = filteredSnippets ? filteredSnippets : css;
  return(
    <List items={snippets} />
  )
}

CssView.propTypes = {
  appContext: PropTypes.shape({
    css: PropTypes.array,
    filteredSnippets: PropTypes.array,
  })
}

export default withContext(CssView);