import React, {useContext,useState} from 'react'
import "../styles/Help.css"
import {StoreContext} from '../Context/StoreContext';
function Help() {
const [showForm,setShowForm]=useState(false);


const [name,setName]=useState("");
const [phone,setPhone]=useState("");
const [email,setEmail]=useState("");
const [message,setMessage]=useState("");

    const {url} = useContext(StoreContext);

    const toggleForm = () => {
        setShowForm(!showForm);
      };

 const helpSubmit=async(e)=>{
 e.preventDefault();
console.warn(name,phone,email,message);
let response=await fetch('https://backend-three-sable.vercel.app/submithelp',{
    method:"POST",
    headers:{
        'Content-Type' :'application/json',
    },
    body:JSON.stringify({name,phone,email,message}),
});
let data= await response.json();
if(data.success){
    alert("complaint successfully sent")
   
      setShowForm(false);
}
else{
    alert("complaint not sent, try again");
}
 }

  return (
    <div className='help' id="help">
        <h1>Reach Out To Us</h1>
        <p>If you are not satisfied with our services , feel free to reach out to us . Drop your complaint here and we will try our best to solve and serve you better.</p>
        <div className='helpBox'>
       
          <button onClick={toggleForm} >Raise a Complaint</button>
       {  showForm &&  (
            <div className="contactForm">
             
              <form onSubmit={helpSubmit}>
                <input type="text" className="name" placeholder="Your Name" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/>
                <input type="number" className="phone" placeholder="Your Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} name="number"/>
                <input type="email" className="email" placeholder="Your Email"value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/>
                <textarea name="message" rows="5" placeholder="Your Message" value={message} onChange={(e)=>{setMessage(e.target.value)}} className="msg"></textarea>
                <button type="submit" value="send" className="submitBtn" >Submit</button>
                <button type="button" className="closeBtn"onClick={toggleForm} >Close</button>
              </form>
            </div>
          )}
      
        </div>
        </div>
  )
}

export default Help
