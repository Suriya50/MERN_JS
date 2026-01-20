import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Dashboard
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
        Login
      </NavLink>
      <NavLink to="/register" className={({ isActive }) => (isActive ? "active" : "")}>
        Register
      </NavLink>
    </nav>
  );
}

export default Navbar;
