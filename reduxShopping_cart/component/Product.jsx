import React from 'react'
import { useDispatch } from 'react-redux'
import { addIem } from '../Slices/cartSlice';

function Product(props) {

  const dispatch  = useDispatch();
  return (
    <div className="card" style={{ width: "18rem;", margin: "10px" }}>
      <img className="card-img-top" src={props.image} alt={props.productName} />
      <div className="card-body">
        <h5 class="card-title">{props.productName}</h5>
        <p class="card-text">Rs. {props.price}/-</p>
        <button onClick={(e)=>dispatch(addIem({name:props.productName,price:props.price }))}>Add to cart</button>
      </div>
    </div>
  )
}

export default Product