import React from 'react'

function Stats({ numberOfItems }) {
  if(!numberOfItems.length)
    return (
      <p className='stats'>
        <em>
          Start adding some items to your packing list🚀
        </em>
      </p>
  );
  //☝ this logic displays a message when the list (numberOfItems) is empty, so everyother👇 thing is not even considered

  const numItems = numberOfItems.length; 
  //using ☝the received items props to derive the number of the items
  const numPacked = numberOfItems.filter((item)=> item.packed).length;
  //calculating☝ the number of items checked
  const percentage = Math.round((numPacked  / numItems) * 100);
  //calculating☝ the percentage number of items checked

  return (
    <div>
        <footer className='stats'>
         <em>
            {percentage === 100 ? 'You got everthing packed and ready to go ✈' : 
              `💼 You have ${numItems} items on your list, and you already packed: 
              ${numPacked} (${percentage}%) `
            } 
          </em>
        </footer>
    </div>
  )
}

export default Stats