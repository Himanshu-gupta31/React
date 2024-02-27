import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numAllowed,setNumAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("")
  const passwordRef=useRef(null)
  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numAllowed){
      str=str+"0123456789"
    }
    if(charAllowed){
      str=str+"~!@#$%^&*(){}[]"
    }
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char)
      
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])
  // useEffect(()=>{passwordgenerator()},[length,numAllowed,charAllowed,passwordgenerator])
  
  const copyclip=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordgenerator()
  },[length,numAllowed,charAllowed,passwordgenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-400 bg-gray-500 shadow-md'>
      <h1 className='text-white text-center my-2'>Password Generator</h1>
      <div className='flex shadow-lg rounded-md overflow-hidden mb-4 '>
        <input type="text"
        value={password}
        placeholder='Password'
        readOnly
        className='py-1 outline-none w-full px-3 mb-4'
        ref={passwordRef}
        />
        <button onClick={copyclip} className='outline-none bg-blue-800 px-3 py-1 shrink-0 mb-4 hover:bg-blue-600'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input
        type="range"
        min={8}
        max={50}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>setLength(e.target.value)}


        />
        <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
         type="checkbox"
         defaultChecked={numAllowed}
         id="numberinput"
         onChange={()=>{setNumAllowed((prev)=>!prev);
        }}
         />
         <label htmlFor='numberinput'>Number:</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
         type="checkbox"
         defaultChecked={charAllowed}
         id="characterinput"
         onChange={()=>{setCharAllowed((prev)=>!prev);
        }}
         />
         <label>Character:</label>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default App
