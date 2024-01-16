import React, { useState } from 'react'
import Item from './Item'

function PackingList({ items, onDeleteItem, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] =useState('input');
  
  let sortedItems; 
  //variable to hold the new array created as a result of the conditions(if-else)

  if (sortBy === 'input') sortedItems = items;
  //if ☝the value of 'sortBy' is input copy the data(array items) from items into the 'sortedItems' variable

  if (sortBy === 'description') sortedItems = items.slice().sort((a, b)=> a.description.localeCompare(b.description));
  // sort the array items alphabetically if ☝the value of 'sortBy' is description 

  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b)=> Number(a.packed) - Number(b.packed));
  // sort the array items based on the packed status(checked) if ☝the value of 'sortBy' is packed


  return (
    <section className='list'>
      <ul>
        {sortedItems.map((item)=> (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} onToggleItems={onToggleItems}/>
          
        ))}

      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>

      </div>
    </section>
  )
}

export default PackingList

//Note:- Originally I was mapping 'items' which is the original state(array) that contains the list-items & passed down as a prop... but now I will be mapping the 'sortedItems' variable(array) which the data that it holds depends on the a condition of whether the value of the state 'sortBy' is input, description or packed.