import React, { useContext } from 'react'
import { CartContext } from '../context/Cart'

function Item(props) {

    const cart = useContext(CartContext);

    console.log("cart",cart);
  return (
        <div className='item'>
            <h2>Item -  {props.name}</h2>
            <p>Item - ${props.price}</p>
            <button onClick={()=>{cart.setItem([...cart.item,{name:props.name,price:props.price}])}}>Add to Cart</button>
        </div>
  )
}

export default Item