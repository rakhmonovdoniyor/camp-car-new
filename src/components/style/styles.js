import styled from "styled-components";
import backrasm from "../../assets/walpaper/motor.png"
import rooms from "../../assets/walpaper/image.png"
import rasm from "../../assets/walpaper/tuning.png"
import usedcars from "../../assets/walpaper/usedcar.png"
import aid1 from "../../assets/walpaper/motor.png"


export const ConWrap =styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 18px 70px;
background-color: white;
/* border: 1px solid red; */
position: fixed;
/* position: sticky; */
width: 100%;
z-index: 1100;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
/* margin-bottom: 80px; */
@media only screen and (max-width: 500px){
   padding: 15px 30px;
}

`

export const Camperh1Wrap = styled.div`
display: flex;
@media screen and (max-width: 500px) {
    display: flex;
    padding: 0px;
}
`
export const Camperh1 = styled.h1`
color: var(--blue, #006DAB);
font-family: 'Montserrat';
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding: 0px 50px;
cursor: pointer;
@media screen and (max-width: 800px) {
    
}
@media screen and (max-width: 500px) {
    display: flex;
    padding: 0px;
}
@media screen and (max-width: 800px) {
    
}
`
export const CamperComponents = styled.div`
display: flex;
/* border: 1px solid red; */
flex:5;
justify-content: space-evenly;
align-items: center;
text-decoration: none;
border-bottom:none;

@media screen and (max-width: 800px) {
    display: none;
}
h2{
    color: var(--text, #373737);
font-family: 'Montserrat';
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-decoration: none;
border: none;
}
:hover{ 
    color: yellowgreen;
}
`
export const CamperIcons = styled.div`
display: flex;
/* border: 1px solid red; */
flex: 1;
justify-content: space-evenly;
align-items: center;
img{
    cursor: pointer;
}
h3{
    color: var(--text, #373737);
font-family: 'Montserrat';
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

}
:hover{
    color: blue;
}
`
export const BigConWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* padding: 50px; */
flex-direction: column;

`
export const BgWrap=styled.div`
padding-top: 80px;
background-image: ${(props) => {
    if (props.$home) {
      return `url(${backrasm})`;

    } else if (props.$caravan) {
      return `url(${rooms})`;

    } else if (props.$tuning) {
      return `url(${rasm})`;

    } else if (props.$usedcar) {
      return `url(${usedcars})`;

    } else if (props.$aidal) {
      return `url(${aid1})`;

    } else {
      return 'url("path-to-default-image.jpg")'; // Default background image
    }
  }};

   background-size: cover;
   background-position: center;
  background-repeat: no-repeat; 
  width:100%;
height: 500px; 
display:flex;
align-items:center;
 justify-content:center;  
text-align:center; 
flex-direction: column;
color: white;
h3{
  color: #FFF;
font-family: 'Montserrat';
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
h2{
  color: #FFF;
font-family: 'Montserrat';
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h1{
  color: #FFF;
font-family: 'Montserrat';
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
@media screen and (max-width: 500px){
 
 width:100%;
  /* background-position:center;
 width:auto;
 height:auto; */
  
}

@media screen and (max-width: 900px){
  
  /* width:auto;
 height:auto;
 background-position:center;  */
  
}
`
export const TwoFlexWrap2 = styled.div`
display: flex;
`
export const TwoFlexWrap3 = styled.div`
display: flex;
`

// ItemPage styles

export const Item24 = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 1200px) {
    
}
`
export const Item242 = styled.div`
display: flex;
border-bottom: 2px solid  rgba(55, 55, 55, 0.50);
padding-top: 30px;
padding-bottom: 8px;
@media screen and (max-width: 500px) {
    display: none;
}
@media screen and (min-width: 500px) {
    display: flex;
}
`

export const ItemRight = styled.div`
display: flex;
flex: 2;
/* border: 1px solid red; */
align-items: center;
justify-content: end;
 gap: 20px; 
/* border-bottom: 2px solid  rgba(55, 55, 55, 0.50); */
div{
    display: flex;
    align-items: center;
    /* justify-content: space-around */
    /* gap: 20px;  */
    /* padding-left: 10px; */
}
`
export const RightIn = styled.div`
display: flex;
gap: 20px;
align-items: center;
p{
    display: flex;
    /* width: 60px; */
}
`
export const INput227 = styled.input`
width: 227px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
padding-left: 10px;
`
export const ItemWRap=styled.div`
display: flex;
border-bottom: 2px solid  rgba(55, 55, 55, 0.50); 
margin: 38px 0;


@media screen and (max-width: 500px){
  display: none;
}
`
export const ItemLeft222=styled.div`
flex: content;
display: flex;

p{
    padding-right: 10px;
}


`
export const ItemRight11=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: end;
input{
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-left: 10px;
}
@media screen and (max-width: 900px){
  display: flex;
  width: 100%;
}
@media screen and (max-width: 500px) {
  display: none;
  /* flex-direction: column; */

}
`
export const ItemWrap2 = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
/* border: 1px solid red; */
@media screen and (min-width: 500px) {
  display: none;
}
/* @media screen and (max-width: 800px) {
  display: none;
}
@media screen and (max-width: 3000px) {
  display: none;
} */
`

export const ItemLeft = styled.div`
display: flex;
flex: 1;
align-items: center;
/* border: 1px solid red; */
`
export const BtnWrap =styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
margin-left: ${(props) => (props.$iconBtn ? "10px" : "")};
margin-top: ${(props) => (props.$iconBtn ? "0px" : "10px")};
:hover{
    color: white;
    background-color:  ${(props) => (props.$iconBtn ? "gray" : "#006DAB")};
}
`
export const Button = styled.button`
/* padding: 5px; */
padding:  ${(props ) => (props.$iconBtn ? "3px 5px" : "6px")};
width:  ${(props) => (props.$iconBtn ? "" : "95px")};
background-color: transparent;
border-radius: ${(props) => (props.$iconBtn ? "5px" : "12px")};
border:${(props) => (props.$iconBtn ? "1px solid #3737374d" : "2px solid  #006dab  ")};
color: #006dab;
font-size: 18px;
cursor: pointer;
`
export const Btn2 =styled.button`
padding:  ${(props ) => (props.$small ? "1px " : "3px")};
border:  1px solid  rgba(55, 55, 55, 0.50) ;
border-radius: ${(props ) => (props.$small ? "0px 5px 5px 0px " : "5px 0px 0px 5px")};
width: 30px ;
cursor: pointer;
background-color: white;
margin-bottom: 5px;

`
export const StarWrap =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const StarWrap2 =styled.div`
display: flex;
align-items: center;
justify-content: end;
`

//asosiy

export const BigWrap = styled.div`


display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 15px;
justify-content: center;
align-items: center;
padding: 20px;

margin-top: 50px;

@media screen and (max-width: 1200px){
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 700px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  /* align-items: center; */
}
@media screen and (max-width: 500px){
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  /* align-items:center;  */
  justify-content: center;
  /* border: 1px solid red; */
}


`
export const TwoFlexWrap = styled.div`
display: flex;
`
export const Left = styled.div`
display: flex;
flex: 1;
@media screen and (max-width: 900px) {
    display: none;
}
/* justify-content: end; */
/* align-items: center; */
/* border: 1px solid blue; */
`
export const Right = styled.div`
display: flex;
flex: 5;
/* border: 1px solid red; */
/* justify-content: center; */
/* align-items: center; */
`
export const Camperh6 = styled.div`
/* display: flex;
flex: 5; */
/* border: 1px solid red; */
/* margin-top: 50px; */
align-items: center;
justify-content: center;
border-radius: 20px;
/* display: flex; */
width: 223px;
height: 307px;
flex-direction: column;
justify-content: center;
/* align-items: center; */
flex-shrink: 0;
padding: 10px;
/* gap: 5px; */
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
h1{
    font-size: 15px;
}
h2{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding: 5px 0px;

}
&:hover{
  background-color: #fafafa;
  transform: scale(1.02);
  transition: 0.5s ease ;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0, 0.3);
}
`

export const Items24 = styled.div`
display: flex;
border: 1px solid blue;
width: 700px;
`
export const CamperWrap = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 15px;

`

export const LeftSearch=styled.div`
display: flex;
@media screen and (min-width: 900px){
  display: none;
}
@media screen and (max-width: 900px){
  display: flex;
}
@media screen and (max-width: 500px){
  display: flex;
}
`
// Accord style 2

export const Item242242 = styled.div`
display: flex;
border-bottom: 2px solid  rgba(55, 55, 55, 0.50);
padding-top: 30px;
padding-bottom: 8px;
flex-direction: column;
@media screen and (min-width: 500px) {
    display: none;
}
@media screen and (max-width: 500px) {
    display: flex;
}
`

export const ItemRight2 = styled.div`
display: flex;
flex: 2;
/* border: 1px solid red; */
align-items: center;
justify-content: end;
 gap: 20px; 
/* border-bottom: 2px solid  rgba(55, 55, 55, 0.50); */
div{
    display: flex;
    align-items: center;
    /* justify-content: space-around */
    /* gap: 20px;  */
    /* padding-left: 10px; */
}
`
export const RightIn2 = styled.div`
display: flex;
gap: 20px;
`
export const INput227227 = styled.input`
width: 227px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
padding-left: 10px;
`
export const ItemLeft2 = styled.div`
display: flex;
flex: 1;
align-items: center;
/* flex-direction: column; */
justify-content: space-between;
/* border: 1px solid red; */
`
export const COlumnItemLeft = styled.div`
display: flex;
flex-direction: column;
`
export const COlumnItemLeft2 = styled.div`
display: flex;
/* flex-direction: column; */
align-items: center;
justify-content: center;
gap: 10px;
`
export const BtnWrap2 =styled.div`
display: flex;

justify-content: space-between;
margin-left: ${(props) => (props.$iconBtn ? "10px" : "")};
margin-top: ${(props) => (props.$iconBtn ? "0px" : "10px")};
:hover{
    color: white;
    background-color: #006DAB;
}
`
export const Button2 = styled.button`
padding:  ${(props ) => (props.$iconBtn ? "1px 5px" : "6px")};
width:  ${(props) => (props.$iconBtn ? "fit-content" : "95px")};
background-color: transparent;
border-radius: ${(props) => (props.$iconBtn ? "5px" : "12px")};
border:${(props) => (props.$iconBtn ? "1px solid #3737374d" : "2px solid  #006dab  ")};
color: #006dab;
font-size: 18px;
cursor: pointer;
`

export const ItemWRap24 =styled.div`
display: flex;
border-bottom: 2px solid  rgba(55, 55, 55, 0.50); 
margin: 38px 0;

@media screen and (max-width: 500px){
  display: none;
}
`