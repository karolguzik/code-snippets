import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';

const CssView = ({appContext: { css }}) => (
  <List items={css} />
)

export default withContext(CssView);