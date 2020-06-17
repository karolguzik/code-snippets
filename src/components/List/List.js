import React from 'react';
import styles from './List.module.scss';
import ListItem from './ListItem';

const List = ({items}) => {
  const itemsList = items.length ? (
    items.map(item => {
      return <ListItem title={item.title} key={item.id} id={item.id}/>
    })
  ) : (
    <p>No added snippet's yet...</p>
  )
  return (
    <ul className={styles.wrapper}>
      {itemsList}
    </ul> 
  )
}

export default List;