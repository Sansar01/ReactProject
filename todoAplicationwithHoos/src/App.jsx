import { useState } from 'react'
import './styles/style.css'
import Header from './component/Header'
import TodoItem from './component/TodoItem'
import Button from './component/Button'

function App() {
 
  const item = ["Eat, sleep and code,Food,Dogal"]

  item.map((item)=>console.log(item))

  return (
    <div className='todo-container'>
      <Header/>
      <TodoItem item="Eat" />
      <TodoItem item="Food" completed="true"/>
      <TodoItem item="FrenchFries"/>
      <TodoItem item="Dogal"/>
      <Button/>
    </div>
  )
}

export default App
