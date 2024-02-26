import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
   <div className='w-full h-screen duration-200'style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center' >
    <div className='flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-2xl'>
      <button className='outline-none px-4 py-1 rounded-lg' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
      <button className='outline-none px-4 py-1 rounded-lg' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
      <button className='outline-none px-4 py-1 rounded-lg' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
      <button className='outline-none px-4 py-1 rounded-lg' style={{backgroundColor:"Olive"}} onClick={()=>setColor("olive")}>Olive</button>
      <button className='outline-none px-4 py-1 rounded-lg' style={{backgroundColor:"grey"}} onClick={()=>setColor("grey")}>Grey</button>
      <button className='outline-none px-4 py-1 rounded-lg' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
      <button className='outline-none px-4 py-1 rounded-lg' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
      <button className='outline-none px-4 py-1 rounded-lg' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
      <button className='outline-none px-4 py-1 rounded-lg' style={{backgroundColor:"lavender"}} onClick={()=>setColor("lavender")}>Lavender</button>
      <button className='outline-none px-4 py-1 rounded-lg' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>

      
      


    </div>
    </div>
   </div>
  )
}

export default App
