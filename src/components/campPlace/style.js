import styled from "styled-components";

import usedcars from "../../assets/campingplace/back.png"
import backrasm from "../../assets/campingplace/back.png"
import tooning from "../../assets/campingplace/back.png"
import rooms from "../../assets/campingplace/back.png"

export const BgWrap=styled.div`
background-image: ${(props) => {
    if (props.$campplace) {
      return `url(${backrasm})`;

    } else if (props.$campplace) {
      return `url(${tooning})`;

    } else if (props.$campplace) {
      return `url(${rooms}})`;

    } else if (props.$campplace) {
      return `url(${usedcars}})`;

    } else {
      return 'url("path-to-default-image.jpg")'; // Default background image
    }
  }};
background-size: 100% 100%;
  background-repeat: no-repeat; 
  width: 100%;
height: 500px;
display:flex;
align-items:center;
justify-content:center; 
text-align:center; 

color: white;
@media screen and (max-width: 300px){
  width: 100%;
  
}

`
export const Camph3 =styled.div`
display: flex;
flex-direction: column;
gap: 30px;
justify-content: center;
align-items: center;
h1{
  font-size: 50px;
}
`

export const Camph1 =styled.div`
display: flex;
`

export const Center =styled.div`
display: ${(props) => (props.$grid ? "" : "flex")};
flex-direction:  ${(props) => (props.$grid ? "column" : "")} ;
justify-content: center;
align-items: center;
@media screen and (max-width: 900px) {
  display: grid;
  padding: 50px 100px;
  justify-content: center;
  align-items: center;
  
}

@media screen and (max-width: 500px){
  padding: 120px;
  // gap: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
`
export const Cen =styled.div`
display: block;
`
export const CardWrap = styled.div`
/* display: flex; */
padding: 50px 0;
/* padding-top: 50px; */
display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
justify-content: center;
align-items: center;
  @media screen and (max-width: 900px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    /* padding-left: 110px; */
    // width: 700px;
  }
  @media screen and (max-width: 700px){
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    align-items: center;
    // padding: 100px;
   
  }
  @media screen and (max-width: 500px){
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }
  
`
export const CardWrap2 = styled.div`
/* display: flex; */
&:hover{
  background-color: #fafafa;
  transform: scale(1.02);
  transition: 0.5s ease ;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0, 0.3);
}
`

export const Placeimg6 = styled.div`
display: flex;
gap: 20px;
`
export const CardWrap4 = styled.div`
display: flex;
gap: 20px;

img{
  border-radius: 15px;
  width: 180px;
  height: 130px;

}

`

export const CardWrap5 = styled.div`
/* display: flex; */
padding: 30px 100px;
display: grid;
justify-content: center;
align-items: center;

@media screen and (max-width: 900px) {
  display: grid;
  padding: 50px 100px;
  justify-content: center;
  align-items: center;
  
}
@media screen and (max-width: 500px) {
  display: grid;
  padding: 50px 100px;
  justify-content: center;
  align-items: center;
  
}
`

export const BoxWrap = styled.div`
display: flex;
/* justify-content: center; */
padding: 20px 0;
a{
  color: var(--blue, #006DAB);
font-family: 'Montserrat';
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration: none;
padding-right: 20px;
}
button {
  border: 1px solid ;
  color: var(--sariq, #FF7A00);
font-family: "Montserrat";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
border-radius: 5px;
width: 120px;
height: 25px;
cursor: pointer;
transition: 0.5s;
background-color: white;

}
button:hover {
  background-color: #FF7A00;
  color: white;
}
@media screen and (max-width: 900px) {
  display: flex;
  /* padding: 50px 100px; */
  justify-content: center;
  align-items: center;
  
}
@media screen and (max-width: 500px) {
  display: flex;
  /* padding: 50px 100px; */
  justify-content: center;
  align-items: center;
  
}
`
export const BoxWrap2 = styled.div`
display: flex;
/* gap: 10px; */
p{
  color: var(--text, #373737);
font-family: 'Montserrat';
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
@media screen and (max-width: 500px) {
  display: flex;
  /* padding: 50px 100px; */
  justify-content: center;
  align-items: center;
  
}
@media screen and (max-width: 900px) {
  display: flex;
  /* padding: 50px 100px; */
  justify-content: center;
  align-items: center;
  padding-left: 300px;
}
`
export const BoxWrap3 = styled.div`
display: flex;
/* flex: 1; */
/* border: 1px solid red; */

p {
  padding-left: 10px;
  color: var(--text, #373737);
font-family: "Montserrat";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
@media screen and (max-width: 900px) {
  /* display: grid; */
  /* padding: 50p/x 100px; */
  /* justify-content: center; */
  /* align-items: center; */
  
}
@media screen and (max-width: 500px) {
  display: flex;
  /* padding: 50px 100px; */
  justify-content: center; 
  align-items: center;
  
}
`
export const BoxWrap4 = styled.div`
/* display: flex; */
flex: 3;
/* border: 1px solid blue; */
display: grid;
gap: 10px;
/* gap: 50px; */
@media screen and (max-width: 500px) {
  display: flex;
  /* padding: 50px 100px; */
  justify-content: center;
  align-items: center;
  
}
@media screen and (max-width: 900px) {
  display: flex;
  /* padding: 50px 100px; */
  justify-content: center;
  align-items: center;
  
}
`
export const Line = styled.div`
border: 1px solid;
color: rgba(55, 55, 55, 0.20);
width: 100%;
margin-bottom: 20px;
`
export const Wrapper2 = styled.div`
/* display:flex ; */
flex: 1;
/* border: 1 px solid blue; */
p{
  padding-left: 10px;
  color: var(--text, #373737);
font-family: 'Montserrat';
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
@media screen and (max-width: 900px) {
  display: flex;
  /* padding: 50px 100px; */
  justify-content: center;
  align-items: center;
  
}
@media screen and (max-width: 500px) {
  display: flex;
  /* padding: 50px 100px; */
  justify-content: center;
  align-items: center;
  
}
`
export const Karta =styled.div`
display: flex;
justify-content: center;
align-items: center;

/* border: 1px solid red; */
`
export const Desc = styled.div`
display: flex;
flex-direction: column;
h3{
  color: var(--blue, #006DAB);
font-family: 'Montserrat';
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration: none;
padding: 20px 0;
}
p{
  padding-bottom: 30px;
}
`