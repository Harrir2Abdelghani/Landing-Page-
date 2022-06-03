import styled from "styled-components";


export const Infosec = styled.div`
color : transparent;
padding: 160px 0;
background: ${(lightBg) => (lightBg ? 'transparent' : '#000' )};
`

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right:auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 990px ) {
padding-right: 30px;
padding-left: 30px;
}
`


export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen  and (max-width: 786px ){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`

export const TextWrapper = styled.div`
max-width: 548;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width: 786px ) {
    padding-bottom: 65px;
}
`