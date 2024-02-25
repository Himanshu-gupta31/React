import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1 className="bg-green-700 mb-2 p-4 rounded-xl">Tailwind Project</h1>
      <Card username={"Himanshu"} btn={"Visit Profile"}/>
      <Card username={"Akshat"} btn={"View Profile"}/>
      

     
    </>
  )
}

export default App
