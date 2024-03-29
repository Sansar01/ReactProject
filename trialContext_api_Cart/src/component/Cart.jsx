import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

function Cart() {
  const cart = useContext(CartContext);
 const total = cart.item.reduce((a,b) => a + b.price,0);

  return (
    <>
      <div className="cart">
        <h2>Cart</h2>
        {cart &&
          cart.item.map((item) => (
            <li>
              {item.name} - {item.price}
            </li>
          ))}

        <h3>Total Bill - ${total} </h3>
      </div>
    </>
  );
}

export default Cart;
