import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Nav,
  Logo,
  NavLinks,
  NavLink,
  LoginButton,
  SignupButton
} from '../css/NavbarStyles';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <Logo to="/">
        <img src="/images/farmer.png" alt="HelloFarmer" />
        HelloFarmer
      </Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/product">Product</NavLink>
        <LoginButton onClick={() => navigate('/login')}>Log in</LoginButton>
        <SignupButton onClick={() => navigate('/signup')}>Sign up</SignupButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;