import { useState } from 'react';
import './App.css';
import ProductList from './ProductList.jsx';
import AddProductForm from './AddProductForm.jsx';

// Task 2: Create App Component
function App() {
  const [products, setProducts] = useState([
    // Defining a default list of products
    { id: 1, name: "Dysol Airway Multi-Styler Complete-Long", price: 599.99, description: "Strawberry Bronze/Blusk Pink" },
    { id: 2, name: "Ninja - CREAMi, Ice Cream Maker", price: 199.99, description: "7 One-Touch Programs - Cloud Silver" },
    { id: 3, name: "Withings - ScanWatch Light", price: 199.95, description: "37 mm Sand & Rose Gold" },
    { id: 4, name: "Apple - 13-inch iPad Air", price: 799.00, description: "Starlight" },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };

  // Task 7: Pass Data Between Components
  return (
    <>
      <div>
        <h2>Melissa's Electronics</h2>
        <ProductList products={products} />
        <AddProductForm addProduct={addProduct} />
      </div>
    </>
  );
}

export default App;
