import { Link } from "react-router-dom";

const Navbar = () => {

    return (


        <>

            <div>


                <div className="dynamic">

                    <div>
                        <h3>COURSES</h3>
                    </div>


                    <div className="pagess">
                        <Link className="links" to="/home">HOME</Link>
                        <Link className="links" to="/about">ABOUT</Link>
                        <Link className="links" to="/contact">CONTACT</Link>
                    </div>

                </div>
            </div>




        </>
    )



}

export default Navbar;