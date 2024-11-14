import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavContainer>
      <BrandName>Shashimal Madhuwantha</BrandName>
      <NavCenter>
        <NavItems>
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </NavItems>
      </NavCenter>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
  font-family: Arial, sans-serif;
  position: relative;
`;

const BrandName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
  z-index: 1;
`;

const NavCenter = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NavItems = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;

  /* Background and text color transition on hover */
  &:hover {
    color: #000; /* Change text color to black */
    background-color: #fff; /* Add white background */
  }

  /* Enhanced underline animation */
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.4s ease;
    opacity: 0;
  }

  &:hover::after {
    width: 100%;
    opacity: 1;
  }
`;
