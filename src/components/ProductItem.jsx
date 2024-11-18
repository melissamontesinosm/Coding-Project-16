
//Task 4:Create the ProductItem Component

import React from 'react';

// Component to display details of an individual product
function ProductItem({ product }) {

    // Render the product's name, price, and description
    return (
        <div className="item">
            <h3>{product.name}</h3>  
            <p>Product Price: ${product.price}</p>  
            <p>Product Description: {product.description}</p> 
        </div>
    );
}

export default ProductItem;
