import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login(){
    const HandleSubmit=(e)=>{
         e.preventDefault()
         setUser({username,password})
    }
    const [username,setUsername]=useState('')
    const [password,Setpassword]=useState('')
    const {setUser}=useContext(UserContext)
    return(
        <div>
            <h2>Login</h2>
            <input type='text'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Username' />
            <br></br>
            <input type='password'
            value={password}
            onChange={(e)=>Setpassword(e.target.value)}
            placeholder='Password'/>
            <button onClick={HandleSubmit}>Submit</button>
        </div>
    )

}
 export default Login