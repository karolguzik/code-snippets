import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';

const JavascriptView = ({ appContext: { javascript }}) => (
  <List items={javascript} />
)

export default withContext(JavascriptView);