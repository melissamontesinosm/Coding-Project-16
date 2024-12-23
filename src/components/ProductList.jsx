
//Task 3: Create the ProductList Component
           
import React from 'react';
import ProductItem from './ProductItem.jsx';  

function ProductList({ products }) {
    return (
        <div>
            <h3>List of Products Available:</h3>

            {/* Render a ProductItem component for each product in the products array */}
            {products.map(product => (
                
                /* Task 5:Implement Keys in the ProductList Component*/
                /* Assign a unique key for each product */
                <ProductItem key={product.id} product={product} /> 
            ))}
        </div>
    );
}

export default ProductList;

