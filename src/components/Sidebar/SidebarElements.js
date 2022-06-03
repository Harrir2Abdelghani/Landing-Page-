import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
export const SidebarContainer = styled.aside`
    position: fixed;
    z-index:999;
    width: 30%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
   opacity: ${({isOpen}) => (isOpen? '100%' : '0')};
    top: ${({isOpen}) => (isOpen? '20px' : '-100%')};

    
`


export const CloseIcon = styled(FaTimes)`
    color: #fff;

`


export const Icon = styled.div`
position: absolute;
top: 0;
right: 0;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
export const SidebarWrapper = styled.div`
    color : #fff;

`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr ;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
    
}
`
export const SidebarLink = styled(LinkS)`
    display: flex;
    font: italic normal bold 20px/16px Typographical line;
    letter-spacing: 0.12px;
    color: #FFF0F0;
    align-items: center;
    margin-right: 10px;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0ms.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color : #01bf71;
        transition: 0ms.2s ease-in-out;

    }
`

export const SidebtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606
}
`


