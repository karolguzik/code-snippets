import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';
import PropTypes from 'prop-types';

const HtmlView = ({appContext: { html, filteredSnippets }}) => {
  const snippets = filteredSnippets ? filteredSnippets : html;
  return(
    <List items={snippets} />
  )
}

HtmlView.propTypes = {
  appContext: PropTypes.shape({
    html: PropTypes.array,
    filteredSnippets: PropTypes.array,
  })
}

export default withContext(HtmlView);