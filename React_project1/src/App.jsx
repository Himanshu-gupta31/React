import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0)
  const incval=() =>{
    setCounter(counter+1)
  }
  if(counter>=20){
    setCounter(19)
  }
  const decval=() =>{
    setCounter(counter-1)
    if(counter<=0){
      setCounter(0)
    }
  }

  return (
    <>
     <h1>Count the number of times you abused</h1>
     <h2>Counter:{counter}</h2>
     <button onClick={incval}>Add Value</button>
     <br/>
     <br/>
     <button onClick={decval}>Delete Value</button>
   
    </>
  )
}

export default App
