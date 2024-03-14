import styled from "styled-components";

export const Container=styled.div`
background-color:#00001a;
width: 101.2%;
height: 100%;
margin: -10px 90px -10px -10px;
padding: 80px 30px 20px 30px;
display: flex;
flex-direction: column;
`;

export const Resources=styled.p`
font-family: roboto;
font-size: 15px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0px;
text-align: left;
font-weight:500;
color:white;
font-weight:bold;
padding-left:40px;
padding:20px;

`;

export const ContainerOne=styled.div` 
width: 80%;
height: 600px;
padding: 20px;
background-color:#00s001a;
border:1px solid white;
align-self: center;
margin-left:35px;
border-radius:20px;

`;

export const Containertwo=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`


export const ImagesCont=styled.div`
width: 50%;
height: 70px;
display:flex;
flex-direction:row;


`;

export const Image=styled.img`
width: 43%;
height:70%;
`

export const AddImg=styled.img`
width:200px;
height: 40px;
margin-top:10px;
margin-left:40px;
`;

export const Contactimgcon=styled.div`
display:flex;
flex-direction:row;
justify-content: center;
margin-right:10px;
`;

export const Name=styled.p`
font-family:;
font-size: 20px;
color:white;
font-weight:550;
padding-right:10px;
`;
export const SpanHead=styled.span`
 font-weight: 100;
`
export const Profile=styled.img`
height: 60px;
width: 60px;
margin-top: 0px;

`

export const Containerthree=styled.div`
display:flex;
flex-direction:row;

height:70%;
padding-left:30px;


`;

export const ColumnDiv=styled.div`
display:flex;
height: 100%;
flex-direction:column;
justify-content: space-between;
background-color:;
margin-top: 0px;

`
export const ArticalCon=styled.div`
display:flex;
flex-direction:row;
margin-left:20px;
height:35px;
width:140px;
height:40px;

padding:4px;

`
export const Icons=styled.img`
height: 37px;
width: 30px;
padding-top:13px;
`

export const IconName=styled.p`
font-family:Sans-serif;
font-size:15px;
color:white;
font-weight: 500;
text-align: left;
padding-left:13px;
&:hover {
    color: #407BFF;
    font-weight: 550;
    cursor: pointer; 
  }

`

export const Containerfour=styled.div`
display:flex;
width: 75%;
margin-left: 30px;
height: 60vh;
border:1px solid #D9D9D9;
flex-direction:column;
justify-content: space-evenly;
border-radius:18px;
`;

export const DateInput=styled.input`
height: 37px;
align-self: flex-end;
margin-right: 20px;
border: none;
background-color: transparent; /* Set background color to transparent */
color: white;
&::-webkit-calendar-picker-indicator {
    filter: invert(1);
    font-size: 20px;
    margin-left: -18px;
    cursor: pointer;
}
`;