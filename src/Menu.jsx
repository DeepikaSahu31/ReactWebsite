import React from 'react';
import { NavLink } from 'react-router-dom';
import  './Style.css';


const Menu = () => {
  return (
    <>
      <NavLink exact to="/about" activeClassName="classsStyle">About Us</NavLink>
      <NavLink exact to="/contact">Contact us</NavLink>
      <NavLink to="/">Home</NavLink>
      
    </>
  )
}

export default Menu;
