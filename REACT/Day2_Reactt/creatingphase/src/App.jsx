import { Route, Routes } from "react-router-dom";
import Profilecarts from "./components/Profilecarts";
import Rendering from "./components/Rendering";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import "./App.css"

const App=()=>{

  const theory="DAY2 TASK-REACT"

return(


  <>
  <center>
  <h2 style={{color:"red"}}>{theory}</h2>
  </center>
  
  <div>


    <Profilecarts/>
  </div>
  <Rendering/>


<Navbar/>

  <div>


<Routes>

<Route path="/home" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>



</Routes>


  </div>
  
  </>
)



}

export default App;