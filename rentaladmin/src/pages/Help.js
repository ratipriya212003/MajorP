import React,{useEffect,useState} from 'react'
import "../styles/Help.css";
import Cross from "../assets/cross_icon.png";
function Help() {

  const [complaint,setComplaint]=useState([]);

  const fetchComplaint=async()=>{

    try{
      let response=await fetch('http://localhost:5000/help');
      response=await response.json();
      setComplaint(response)
    }
    catch(error){
      console.error("error",error);
    }
  };
  

  useEffect(()=>{
    fetchComplaint();
  },[]);

async function removeComplaint(id){
let result=await fetch(`http://localhost:5000/help/${id}`,{
  method:"DELETE",
});
result=await result.json();
if(result.success){
  fetchComplaint();
  alert("record deleted");
}
else{
  alert("record not deleted");
}
}

  return (
    <div className='adminHelp' id='adminHelp'>
      <h1>User Complaints</h1>
      <div className='complaintLists'>
        {complaint.map((complaint,index)=>(
          <div key={complaint._id} className='complaintList' onClick={()=>removeComplaint(complaint._id)}>
             <img src={Cross} className='remove'/>
          <p><b>S.No:</b>{index+1}</p>
          <p><b>Name:</b>{complaint.name}</p>
          <p><b>Phone Number:</b>{complaint.phone}</p>
          <p><b>Email:</b>{complaint.email}</p>
          <p><b>Complaint:</b>{complaint.message}</p>
        </div>
        )
      )}
      </div>
    </div>
  )
}

export default Help;