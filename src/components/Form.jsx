import React, { useState } from 'react'

function Form({ onAddItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    
    function handleSubmit(e) {
        e.preventDefault(); //prevent difault reloading when the form is submited
        if(!description) return; //so that if there is nothing in the input we should'nt be able to submit
        
        const newItem = {description, quantity, packed: false, id: Date.now() };
        //using the values stored in descrption & quantity states into the varible newItem, also their id's when looped using time and packed varible set to false
        
        console.log(newItem); //logs all those things stored inisde to the console

        onAddItems(newItem);//this function takes newItem as an argument 
        setDescription('');
        setQuantity(1);

    }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                    {num}
                </option>
            ))}
        </select>
        <input type="text" placeholder='item...' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button>Add</button>
    </form>
  )
}

export default Form

//onClick can also be used but that only works when the submit button is clicked ...but onSubmit actually works both when the submit button and the enter button on your keyboard is clicked 