import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
import logo1 from "../assets/logo1.png";
import { BsFillPersonFill } from "react-icons/bs";
// import { BsSearch } from "react-icons/bs";
import "./Navbar.css";
const Navbar = () => {
  const auth = useAuth();
  return (
    <div>
      <nav className="header">
        <img src={logo1} alt="logo" />
        <h1>Go See!</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/destinations">Destination</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/product">Tour</NavLink>
        <NavLink to="/profile">Planning</NavLink>
          <span>
        {!auth.user && <NavLink to="/login">My Account</NavLink>}
        <BsFillPersonFill size={22} color="orange"/>
        </span>
        {/* <span className="search">
          <input type="text" placeholder="Search..." />
          <BsSearch className="btn-srch" />
        </span> */}
        </nav>
      
    </div>
    
  
  );
};
export default Navbar;
