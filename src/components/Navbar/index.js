import React from 'react';
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavBarElements';
import image from "../images/fitrigek logo.png"
export const Navbar = ({toggle}) => {
  return (
<>

    <Nav>
    
      <NavbarContainer>
      <NavLogo src={image}></NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
        <NavItem>
            <NavLinks  smooth to="Contact">تواصل معنا</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks smooth to="BlueSection">عن في طريقك</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks smooth to="FirstSection">الرئيسية</NavLinks>
          </NavItem>
         
        </NavMenu>
        
      </NavbarContainer>
    </Nav>
</>
);
};

