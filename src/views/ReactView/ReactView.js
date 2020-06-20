import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';
import PropTypes from 'prop-types';

const ReactView = ({appContext: { react, filteredSnippets }}) => {
  const snippets = filteredSnippets ? filteredSnippets : react;
  return(
    <List items={snippets} />
  )
}

ReactView.propTypes = {
  appContext: PropTypes.shape({
    react: PropTypes.array,
    filteredSnippets: PropTypes.array,
  })
}

export default withContext(ReactView);