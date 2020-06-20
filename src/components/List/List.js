import React from 'react';
import styles from './List.module.scss';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph/Paragraph';

const List = ({items}) => {
  const itemsList = items.length ? (
    items.map(item => {
      return <ListItem title={item.title} key={item.id} id={item.id} type={item.type}/>
    })
  ) : (
    <Paragraph>No added snippet's yet...</Paragraph>
  )
  return (
    <ul className={styles.wrapper}>
      {itemsList}
    </ul> 
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
}

export default List;