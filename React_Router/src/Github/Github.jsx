import React from 'react'
import {useEffect,useState} from 'react' 

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Himanshu-gupta31')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
  return (
    <div className='p-4 bg-slate-600 text-white flex justify-center items-center flex-col'>Github followers:{data.followers}
    <img  src={data.avatar_url} width={300} alt='git image'/>
    </div>
  )
}

export default Github