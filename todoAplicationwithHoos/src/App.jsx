import { useState } from 'react'
import './styles/style.css'
import Header from './component/Header'
import TodoItem from './component/TodoItem'
import Button from './component/Button'

function App() {
  //const item = ["Eat, sleep and code,Food,Dogal"]

  const item = [
    { name: 'Eat',completed:true },
    { name: 'sleepandcode' },
    { name: 'Food',completed:true },
    { name: 'Dogal' },
  ]

  item.map((item, index) => console.log(item.name + ' **** ' + index))

  return (
    <div className="todo-container">
      <Header />
      <TodoItem item={item} />
      {/* <TodoItem item="Eat" />
      <TodoItem item="Food" completed="true"/>
      <TodoItem item="FrenchFries"/>
      <TodoItem item="Dogal"/> */}
      <Button />
    </div>
  )
}

export default App
