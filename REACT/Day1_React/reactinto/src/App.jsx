

import "./App.css"
import About from "./components/About";
import Datass from "./components/Datass";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {


    const valuess = {

        names: "surya",
        age: "20",
        role: "developer",
        city: "Tiruvannamalaai"


    }

    return (

        <>


            <Navbar />


            <Home />


            <About />


            <Datass name={valuess.names} age={valuess.age} role={valuess.role} city={valuess.city} />

        </>



    )





}

export default App;