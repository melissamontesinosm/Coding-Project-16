
//Task 6:Create the AddProductForm Component

import React, { useState } from 'react';


function AddProductForm({addProduct}) {
    //Manging the form;s input fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  //Form Submission
  const submitButton = (event) => {
    event.preventDefault();
    addProduct({name,price,description }); 

    //Used to reset input field
    setName('');
    setPrice('');
    setDescription('');
  };

  //Rendering the form
  return (
    <form onSubmit={submitButton}>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Product Name"/>
      <input type="text" value={price} onChange={(event) => setPrice(event.target.value)} placeholder="Product Price"/>
      <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Product Description"/>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;