import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  width: 200px;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex: 1;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  
  &:hover {
    color: #666;
  }
`;

export const LoginButton = styled.button`
  background-color: #f4b183;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e69b62;
    transform: translateY(-2px);
  }
`;

export const SignupButton = styled.button`
  background-color: #f4b183;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e69b62;
    transform: translateY(-2px);
  }
`;
