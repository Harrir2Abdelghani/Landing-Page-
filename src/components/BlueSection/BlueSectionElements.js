import styled from "styled-components";



export const Group = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-start;
min-width: 100%;
margin-top: 60px;
` 

export const OverapGroup = styled.div`
height: 540px;
display: flex;
align-items: center;
min-width: 100%;
transform: skewY(-3deg);
background: #3A50C4 0% 0% no-repeat padding-box;
`

export const AppImage = styled.img`
width: 650px;
height: 450px;
margin-left: 50px;
transform: skewY(3deg);
position: absolute;
`

export const TextLabel = styled.h1`
width: 580px;
height: auto;
margin-left: 700px;
margin-right: 60px;
margin-top: 40px;
direction:rtl;
transform: skewY(3deg);
color: #FFFFFF;
text-align: right;
position: absolute;
`

export const Span1 = styled.span`
font: italic normal bold 25px/40px Typographical line;
letter-spacing: 0.4px;

`

export const Span2 = styled.span`
font: italic normal bold 16px/20px Typographical line;
letter-spacing: 0.25px;
`