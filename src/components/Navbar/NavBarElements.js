import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    height: 60px;
    margin-top: 27px;
    //margin-top: -80px;
    display: flex;
    
    font-size: 1rem;
    position: sticky;
    
    z-index: 1;

@media  screen and (max-width: 960px) {
    transition: 0.08s all ease ;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;

z-index: 1;

padding: 0%.24px;
max-width: 1100px;
`

export const NavLogo = styled.img`

width: 200px;
height: 80px;
display: flex;

margin-left: 50px;




`

export const MobileIcon=styled.div`
display: none;

@media screen and (max-width: 786px) {
 display   :flex ;
 position: absolute;
 top: 0;
 right:0px;
 transform: translate(-100%,60%);
 font-size: 1.5rem;
 cursor: pointer;
 color: #000 ;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
margin-left : 550px;


@media screen and (max-width: 800px) {
    display: none;
} 

`

export const NavItem = styled.li`
height: 80px;
width: 100%;
margin-left: 40px;
white-space: nowrap;
`

export const NavLinks =styled(LinkS)`
display: flex;
margin-top: 30px;

font: italic normal bold 25px/20px Typographical line;
letter-spacing: 0.12px;
color: #FFF0F0;

text-decoration: none;
cursor: pointer;
&:hover {
    background-color: white;
    color: #3349BE;
    border-radius: 10px;
    padding: 6px;
   
}

&.active{
    border-bottom: 3px solid #01bf71;
}
`

export const NavBtn= styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 786) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
 border-radius: 50px;
 background: #01bf71;
 white-space: nowrap;
 padding: 10px 22px;
 color : #010606;
 font-size: 16px;
 outline : none;
 border : none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;

&.hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`