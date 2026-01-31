import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {


const [regdata,setRegdata]=useState({username:"",useremail:"",userpassword:""})
const navigat=useNavigate()
const handlechange=(e)=>{

const {name,value}=e.target

setRegdata({...regdata,[name]:value})

}

const handlesubmit=(e)=>{

e.preventdefault

  localStorage.setItem("regdatas",JSON.stringify(regdata))


alert("successfully done")

setRegdata({username:"",useremail:"",userpassword:""})
navigat('/login')

}


  return (
 <>

 <div  className="d-flex flex-col gap-20">


  <form onSubmit={handlesubmit} >


<input    onChange={handlechange}  className="bg-green-500 text-white p-2 mb-5 rounded ml-170 mt-5" type="text" placeholder="Enter the name"  name="username" value={regdata.username} /><br />
<input  onChange={handlechange}  className="bg-green-500 text-white p-2 mb-5 rounded  ml-170" type="email" placeholder="Enter the email"  name="useremail" value={regdata.useremail} /><br />

<input  onChange={handlechange}  className="bg-green-500 text-white p-2 mb-5 rounded  ml-170" type="password" placeholder="Enter the password"  name="userpassword" value={regdata.userpassword}/><br />

<button  className="bg-black text-white p-2 mb-5 rounded  ml-184">submit</button>



  </form>
 </div>
 
 </>
  )
}

export default Register