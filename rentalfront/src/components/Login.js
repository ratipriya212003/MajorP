import React, {  useState } from 'react'
import "../styles/Login.css";
import {useNavigate} from "react-router-dom";
import { StoreContext } from '../Context/StoreContext';
import crossIcon from "../assets/cross_icon.png";
function Login({setShowLogin}) {
 
    const [currState,setCurrState]=useState("Login");

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();
 const {url} = useContext(StoreContext);


const login=async(e)=>{
 e.preventDefault();
console.log("email,password",email,password)
let result= await fetch(`${url}/login`,{
  method:"Post",
  body:JSON.stringify({email,password}),
  headers:{
    'Content-Type':'application/json'
  }
});
result=await result.json();
console.log(result);
if (result.success) {
  navigate('/cart');
  setShowLogin(false); 
}
}

const signup=async(e)=>{
  e.preventDefault();
    console.log("signup function executed", name,email,password);
    let responseData=
    await fetch(`${url}/register`,{
      method:"Post",
      headers:{
        'Content-Type' :'application/json',
      },
      body:JSON.stringify(
        {name,email,password}
      ),
    });
   let response=await responseData.json();
    console.warn(response);
    console.log(response.success);
localStorage.setItem("user",JSON.stringify(response))
    if(response){
      navigate('/cart');
      setShowLogin(false);
    }
  
}

  return (
   <div className='login-popup' id='login'>
    <form className='login-popup-container' onSubmit={currState==='Login'?login:signup}>
        <div className='login-popup-title'>
<h2>{currState}</h2>
<img onClick={()=>setShowLogin(false)}src={crossIcon} alt='Not Avail'/>
        </div>
<div className='login-popup-inputs'>
    {currState==="Login"?<></>:<input name="username" value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Your Name' required/>}
    <input name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Your Email' required/>
    <input name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password' required/>
</div>
<button > {currState==="Login"?"Login":"Create Account"}</button>
{/* <button>Sign In with Google
<i class='bx bxl-google-plus-circle' style={{color:'#ffffff' , fontSize:'1.4rem' ,margin:'4px 4px'}} ></i>
</button> */}
<div className='login-popup-condition'>
    <input type='checkbox' required/>
    <p>By continuing, i agree to the terms of use & privacy policy.</p>
    {currState==="Login" ? <p>Create a new Account? <span onClick={()=>setCurrState("Sign In")}>Click Here</span></p> : <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
   }
    
</div>

    </form>
   </div>
  )
}

export default Login
