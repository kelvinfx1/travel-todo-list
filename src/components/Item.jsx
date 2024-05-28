import React from 'react'

function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
        <input type="checkbox" value={item.packed} onChange={()=> onToggleItems(item.id)}/>
        
        <span style={item.packed ? { textDecoration :"line-through" } : {}}>
            {/* if packed property of item is true the inline-style will be applied */}

            {/* {item.quantity}  */}
            {item.description}
        </span>
        <button onClick={()=> onDeleteItem(item.id)}>❌</button>
        {/* passing the handleDeletItem prop down here as a function iside another function */}

    </li>
  )
}

export default Item