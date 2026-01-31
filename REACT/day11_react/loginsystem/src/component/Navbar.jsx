import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <>

            <div className="bg-black text-white p-5">
<div className="flex justify-center gap-6">
                <Link  to="/">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
</div>



            </div>



        </>
    )
}

export default Navbar