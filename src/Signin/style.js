import styled from "styled-components";
import naver from "../assets/navbar-images/acoount.png"

export const Wrapreg= styled.div`
display: flex;
justify-content: center;
width: 100%;
align-items: center;
`
export const RegWrapper = styled.div`
width: 500px;
/* height: 600px; */
border-radius: 5px;
/* border: 1px solid red; */
padding: ${(props) => (props.$sign ? "0" : "30px")};

/* box-shadow:  10px 10px 8px #8888; */
/* border: 1px solid red; */
/* box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1); */
@media screen and (max-width: 900px) {
  
}
@media screen and (max-width: 500px) {
  width: 300px;
}

`
// export const Wrap = styled.div`



/* @media screen and (max-width: 500px) {
  width: 300px;
} */


export const REgh1 =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 0;
h1{
    color: var(--text, #373737);
font-family: "Open Sans";
font-size: 27px;
font-style: normal;
font-weight: 1500;
line-height: normal;
}
`
export const Inputwrap = styled.div`
width: 100%;
display:grid;
gap: 20px;
p{
    padding-left: 10px;
}
`

export const Input1 = styled.input`
width: 100%;
height: 50px;
/* background-color: ; */
border-radius: 10px;
background-color: rgba(55, 55, 55, 0.10);
border: none;
display: flex;
justify-content: space-evenly;
align-items: center;
padding-left: 20px;

`
export const Flex =styled.div`
display: flex;
input{
    width: 23px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
color: #37373726;
cursor: pointer;
}
`
export const Checkbox = styled.div`
display: flex;
justify-content: space-between;
input{
    background-color: rgba(55, 55, 55, 0.10);
    width: 30px;
   
}
div{
    display: flex;
    p{
      color: #373737;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
   }
`
export const BtnReg = styled.div`
display: flex;
text-align: center;
justify-content: center;
align-items: center;
width: 100%;
height: 50px;
border-radius: 10px;
background-color:  ${(props) => (props.$create ? "#fff" : "#006DAB")} ;
border: 2px solid #006DAB;
color:  ${(props) => (props.$create ? "#006DAB" : "#fff")};
font-family: "Open Sans";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
:hover{
  background-color:${(props) => (props.$create ? "#006DAB" : "#fff")};
  color: white;
}

button:hover{
    background-color: ${(props) => (props.$create ? "#006DAB" : "#fff")};
    color: ${(props) => (props.$create ? "#fff" : "#006DAB")};
    background-color: #006DAB;
    color: white;
}

`


export const Or =styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #6D6D6D;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export const ThreeIcon = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;


`
export const Logos =styled.img`
background-image: ${(props) => {
    if (props.$navimg) {
      return `url(${naver})`;

    } else if (props.$pop2) {
      return `url(${naver})`;

    } else if (props.$pop3) {
      return `url(${naver})`;

   
    } else {
      return 'url("path-to-default-image.jpg")'; // Default background image
    }
  }};
   background-size: cover;
   background-position: 100%;
  background-repeat: no-repeat; 
 border:1px solid red;
display:flex;
align-items:center;
justify-content:center; 
text-align:center; 
flex-direction: column;

`

export const SignInTitle =styled.div`
color: var(--text, #373737);
font-family: "Open Sans";
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 25px;
`

export const SignInInput=styled.div`
display: flex;
flex-direction: column;
align-items: start;
/* border: 1px solid red; */
gap: 10px;
width: 100%;

p{
color: rgba(55, 55, 55, 0.80);
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`

export const SignInCheckBox =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;

color: #373737;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`