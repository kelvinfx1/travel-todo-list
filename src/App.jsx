import React from 'react'
import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
import Item from './components/Item'
import Splashscreen from './components/splashscreen'

function App() {
  const [items, setItems] = useState([]);// all the new items to be stored here

  // const itemNum = items.length;
  // console.log(itemNum) 
  //The ☝number of the items can be derived like this

  function handleAddItems(item) { //this function takes item (newItem) as a parameter 
    setItems((items) => [...items, item]); 
    //array state is spread and item (newItem) put inisde 
}

function handleDeleteItem(id) {
  setItems(items => items.filter(item=>item.id !== id))
  console.log(id)
} //☝ takes and id parameter, then use filter to loops through the Id's of the items in the array. >tem=>item.id !== id< If the id of an item doesnt(false) match the selected id(parameter) ie the one that has been clicked, it remains inside the list(array) but if it does(true) then it is booted out

function handleToggleItem(id) {
  setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
} //☝ used to toggle the check-button

function handleClearList() {
  const confirmed = window.confirm('Are you sure you want to delete all items?');
  //☝used to alert the user to comfirm if they want to delete all items
  
  if (confirmed) setItems([]);
} //☝used to delete everything on the list by emptying the items state(array) based on the confirmed variable 

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems}/> {/* passing down handleAddItem function as a prop can also go by the actual function name*/}
      <PackingList 
      items={items} onDeleteItem={handleDeleteItem} 
      onToggleItems={handleToggleItem}
      onClearList={handleClearList}/> {/* passing down states & functions as props*/}
      

      <Stats numberOfItems={items}/>
    </div>
  )
}

export default App