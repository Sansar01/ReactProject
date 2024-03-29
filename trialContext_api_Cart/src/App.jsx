import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './component/Item'
import Cart from './component/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Item name="Iqoo" price = "100"/>
      <Item name="Redmi" price = "500"/>
      <Item name="Realme" price = "50"/>
      <Cart/>
    </>
  )
}

export default App
