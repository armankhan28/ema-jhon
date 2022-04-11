import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviweItem.css'
const ReviweItem = (props) => {
    const {product, removeProduct} = props;
    const {img, name, price, shipping, quantity} = product;
    return (
        <div className='review-item'>
           <div>
               <img src={img} alt="" />
           </div>
           <div className="review-details">
               <div className="item">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) +'...' : name}
                    </p>
                    <p>Price: <span className='orange'>${price}</span></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
               </div>
               <div className="delete">
                   <button onClick={() => removeProduct (product)} className='delete-btn'>
                       <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon>
                   </button>
               </div>
           </div>
        </div>
    );
};

export default ReviweItem;