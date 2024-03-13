
import { useState } from 'react';
import './App.css'

function App() {

 let [counter,setcounter] =  useState(10)
  //let counter = 15;

 const addValue = () =>
  {
    
    //counter = counter + 1
    if(counter<20)
    {
    //setcounter(counter + 1);
    setcounter(prevcounter=> prevcounter+1);
    setcounter(prevcounter=> prevcounter+1);
    setcounter(prevcounter=> prevcounter+1);
    setcounter(prevcounter=> prevcounter+1);
    document.getElementById("removecounter").innerHTML = "";
    }
    else
    {
      document.getElementById("addingcounter").innerHTML = "Maximum limit of counter: "+ counter;
    }
  }

  const removeValue = () =>{
   // counter = counter - 1;
   if(counter>0)
    {
    setcounter(counter - 1);
    document.getElementById("addingcounter").innerHTML = " ";
    }
    else
    {
      document.getElementById("removecounter").innerHTML = "Minimum limit of counter: "+ counter;
    }
  }
  return (
    <>
      <h1>Counter React Project</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <h2 id="addingcounter"></h2>
      <button onClick={removeValue}>remove value</button>
      <h2 id="removecounter"></h2>
     </>
  )
}

export default App
