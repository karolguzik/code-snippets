import React from 'react';
import withContext from '../../hoc/withContext';
import List from '../../components/List/List';

const HtmlView = ({appContext: { html }}) => (
  <List items={html} />
)

export default withContext(HtmlView);