import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {


  const [logdata,setLogdata]=useState({logemail:"",logpassword:""})

  const navigat=useNavigate()
    const handlechange=(e)=>{
    
    const {name,value}=e.target
    
    setLogdata({...logdata,[name]:value})
    
    }
    
    const handlesubmit=(e)=>{
    
    e.preventdefault

    const getdata=JSON.parse(localStorage.getItem("regdatas"))

    if(getdata.useremail===logdata.logemail && getdata.userpassword===logdata.logpassword){
setLogdata({logemail:"",logpassword:""})

navigat('/dashboard')}

    else{
    alert("please fill correct vaild email and password")
    
    }
    
    }
  return (
   
     <>

    <Link to={"/"}>back</Link>
    
     <div  className="d-flex flex-col gap-20">


    
    
      <form onSubmit={handlesubmit} >
    
    
    
    <input onChange={handlechange}   className="bg-green-500 text-white p-2 mb-5   mt-5 rounded  ml-170" type="email" placeholder="Enter the email" name="logemail" value={logdata.logemail} /><br />
    
    <input   onChange={handlechange}  className="bg-green-500 text-white p-2 mb-5 rounded  ml-170" type="password" placeholder="Enter the password" name="logpassword" value={logdata.logpassword} /><br />
    
    <button  className="bg-black text-white p-2 mb-5 rounded  ml-184">submit</button>
    
    
    
      </form>
      </div>



     
    </>
  )
}

export default Login