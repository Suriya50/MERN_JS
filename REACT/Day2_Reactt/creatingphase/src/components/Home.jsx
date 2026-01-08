

import homes from "../assets/images/full.png"


const Home = () => {

    return (


        <>
            <center>
                <div style={{ marginTop: "15px" }}>
                    <div>



                        <h2>full stack courses</h2>





                    </div>

                    <div>

                        <p>A Full Stack Development course is designed to teach students how to build complete web applications, covering both frontend and backend technologies. On the frontend, learners work with HTML, CSS, JavaScript, and modern frameworks like React or Angular to create user-friendly interfaces. On the backend, they learn server-side programming using Node.js, Express, or .NET, along with working with databases such as MongoDB, MySQL, or PostgreSQL. The course often includes hands-on projects, version control using Git, and deployment strategies, enabling students to develop, test, and launch real-world applications. By the end of the course, learners gain the skills needed to work as professional full stack developers capable of handling all layers of web development.</p>
                    </div>
                </div >
            </center>
            <div>


                <img src={homes} alt="phootos" style={{ height: "550px", width: "50%", marginTop: "10px", alignItems: "center", textAlign: "center", borderRadius: "12px", marginLeft: "25%" }} />
            </div>



        </>
    )



}

export default Home;