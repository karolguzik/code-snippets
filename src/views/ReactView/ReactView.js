import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';

const ReactView = ({ appContext: { react }}) => (
  <List items={react} />
)

export default withContext(ReactView);