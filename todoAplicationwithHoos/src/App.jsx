import { useState } from 'react'
import './styles/style.css'
import Header from './component/Header'
import TodoItem from './component/TodoItem'
import Button from './component/Button'

function App() {
  const [count, setCount] = useState({
    item:"Eat,Food,French,Dogal"
  })

  return (
    <div className='todo-container'>
      <Header/>
      <TodoItem />
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <Button/>
    </div>
  )
}

export default App
