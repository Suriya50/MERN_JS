import { useContext } from "react";
import UsersContext from "../context/UsersContext";

const Userdetail = () => {
  const items = useContext(UsersContext);

  return (



    <>
    
    {items.map((e)=>(



<div key={e.id}>

    <h2>name:{e.name}</h2>
    <h3>city:{e.city}</h3>
    <h4>role:{e.role}</h4>




</div>

    ))}
    
    
    
    </>
  )



};

export default Userdetail;
