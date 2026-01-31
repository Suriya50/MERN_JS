import { Route, Routes } from "react-router-dom"
import Navbar from "../component/Navbar"
import Register from "../component/Register"
import Login from "../component/Login"
import Dashboard from "../component/Dashboard"

const Approutes = () => {
  return (
    <>

    <div>
    
    <Navbar/>


    <Routes>


<Route path="/" element={<Register/>} />
<Route path="/login" element={<Login/>} />
<Route path="/dashboard" element={<Dashboard/>} />



    </Routes>
    
    </div>
    </>
  )
}

export default Approutes
