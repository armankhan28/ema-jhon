import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>seller: {seller}</h3>
        </div>
    );
};

export default Product;