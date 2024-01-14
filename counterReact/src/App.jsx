import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15;

  return (
    <>
      <h1>Counter React Project</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <button>remove value</button>
    </>
  )
}

export default App
