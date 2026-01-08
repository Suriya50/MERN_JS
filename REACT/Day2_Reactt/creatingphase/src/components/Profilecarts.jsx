import "./Cards.css"

import phoots from "../assets/images/logos.png"




const Profilecarts = () => {

    const name = "I'm surya"
    const dept = "Frontend developer"
    const lines = "I build responsive, user-friendly web applications using modern technologies like React, JavaScript, HTML, and CSS. I enjoy transforming ideas into clean, efficient, and visually appealing interfaces while focusing on reusable and maintainable code. I follow best UI/UX practices and continuously learn new tools and frameworks to improve my development skills and deliver better user experiences."


    return (
        <>


<h4  style={{marginTop:"20px", alignItems:"center", textAlign:"center"}}>1. Components (class + function) + CSS + Image</h4>
            <div className="parent1">

                

                <div className="child1">

                    <h1>{name}</h1>
                    <h2>{dept}</h2>
                    <h3>{lines}</h3>
                    



                </div >



                <div className="child2">

                    <img src={phoots} alt="imagessssss" />
                </div>


            </div>

<hr />


        </>
    )





}


export default Profilecarts;