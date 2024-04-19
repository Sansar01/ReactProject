import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Cart from '../component/Cart'
import Product from '../component/Product'
import products from  "./products.json"

export function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className='App'>
      <Cart/>
      <div className='products'>
        {products.map((products)=>
        <Product {...products}/>
        )}
      </div>
    </div>
   </>
  )
}
