import React from 'react';
import styles from './List.module.scss';
import ListItem from './ListItem';

const List = ({items}) => {
  return (
    <ul className={styles.wrapper}>
      {items.map(item => (
        <ListItem title={item.title} description={item.description} />
      ))}
    </ul> 
  )
}

export default List;