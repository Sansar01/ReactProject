import React from 'react'

function Cart() {
  return (
   <div className='alert  alert-success'>
        <h3 className='text-center'>
            Total items: {items.length}  (Rs .{total})/-
        </h3>
   </div>
  )
}

export default Cart