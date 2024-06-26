import styled from "styled-components";

export const SubCardSection=styled.div`
display:flex;
flex-direction:column;
padding:20px;
padding-top:70px 0px 60px 30px;
`;

export const SubHead=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:28px;
margin:60px 0px 20px 47px;
z-index:1;
`;
export const SubHeadSpan = styled.span`
  width: 65px;
  height: 8%;
  margin-top: 48px;
  margin-left: 15px;
  position: absolute;
  background-color: rgba(129, 150, 219, 0.3); /* Adjust the alpha value as needed */
  z-index:0;
`;
export const SubPageImg=styled.img`
width:300px;
height:300px;
margin-left:40px;
`;
export const SubPara=styled.p`
font-size:20px;
margin:0px 0px 20px 47px;
color:white;
width:80%;
`;
export const BackButton=styled.button`

color:rgba(129, 150, 219, 0.3);
border-:none;
font-size:40px;
margin-right:95%;
margin-left:30px;
`;