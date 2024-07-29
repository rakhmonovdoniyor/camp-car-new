import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
height: 100px;
flex-shrink: 0;
border: 10px ;
border-radius: 10px ;
gap: 10px;
margin-top: 10px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
@media screen and (max-width: 900px){
    display: flex;
    justify-content: center;
    align-items: center;

width: 100%;
height: 100px;
flex-shrink: 0;
}
/* @media screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
} */

@media screen and (max-width: 500px){
    display: none;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
}
`
export const Rewiev =styled.div`
@media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    width: 300px;
}
@media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
}
`

export const Prem1 =styled.div`
@media screen and (max-width: 500px) {
    display: none;
    border: 1px solid blue;
}
@media screen and (min-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
}
/* @media screen and (max-width: 900px) {
    display: flex;
} */
`
export const Prem2 =styled.div`
@media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and (min-width: 500px) {
    display: none;
}
/* @media screen and (max-width: 900px) {
    display: flex;
} */
`
export const PremInput = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 900px){
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    
}
@media screen and (max-width: 500px){
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
}
`
export const Input = styled.div`
width: 150px;
padding: 10px ;

`


export const First = styled.div`
display: flex;
/* flex: ; */
padding-left: ${(props) => (props.$prem ? "40px" : "")} ;
align-items: center;
justify-content: end;
/* border: 1px solid blue; */
`
export const CenterDiv = styled.div`
display: flex;
/* flex-direction: column; */
flex: ${(props) => (props.$small ? "1" : "7")};
align-items: center;
justify-content: space-between;
/* border: 1px solid red; */
@media screen and (max-width: 900px) {
    display: flex;
    /* flex: ${(props) => (props.$small ? "1" : "7")}; */
    /* flex-direction: column; */
    align-items: center;
justify-content: space-between;
}
@media screen and (max-width: 500px) {
    display: grid;
    flex-direction: column;
}
`
export const EndDiv = styled.div`
flex: 1;
display: flex;
flex-direction: column;
/* align-items:center ; */
/* justify-content: center; */
/* border: 1px solid red; */
`
export const Line1 = styled.div`
display: flex;
 align-items: center; 
/* justify-content: center; */

`
 export const Column1 = styled.div`
display: flex;
flex-direction: column;
flex: 3;

 `
 export const FarLIne = styled.div`
width:100%;
height: 1px;
background-color: rgba(55, 55, 55, 0.15);
border: 1px solid rgba(55, 55, 55, 0.15);
 `

export const Smallp = styled.div`
color: rgba(55, 55, 55, 0.70);
font-family: 'Monst';
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
` 
export const ContactWrap =styled.div`
display: flex;
gap: 40px;
justify-content: center;
align-items: center;
@media screen and (max-width: 900px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
@media screen and (max-width: 500px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
`
export const Karta =styled.div`
display: flex;
flex: 2;
flex-direction: column;
/* align-items: center; */
justify-content: center;

`
export const KartaRasm =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 522px;
margin-top: 50px;
margin-bottom: 80px;
@media only screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 322px;
    /* padding-left: 100px; */
  }
`

export const InputTwo =styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 109px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
padding: 20px;
gap: 10px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
p{
    color: #666;
font-family: 'Montserrat';
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 18.2px */
}
h4{
    color: var(--txt-color, #1E1C1C);
font-family: 'Montserrat';
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 23.4px */
}
`
export const InputWrap =styled.div`
display: flex;
gap: 30px;
padding-top: 10px;
@media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    
}
`

export const BtnHover =styled.div`
padding-left: 90px;
:hover {
    background-color: blue;
    color: white;
}
`

export const Con1 = styled.div`
/* display: flex; */
/* width: 100%;
height: 100px;
flex-shrink: 0;
border: 10px ;
border-radius: 10px ;
gap: 10px;
margin-top: 10px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
@media screen and (max-width: 500px) {
    

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 50px;
border: 10px ;
border-radius: 10px ;
width: 100%; 
margin-top: 10px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
@media screen and (min-width: 500px) {
    display: none;
}
`
export const Con2 = styled.div`
display: flex;
`
export const Con3 = styled.div`
display: flex;
justify-content: space-around;
gap: 20px;
`
export const Con4 = styled.div`


@media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
}
@media screen and (min-width: 500px) {
    display: none;
}
`
export const Con5 = styled.div`
display: flex;
@media screen and (max-width: 900px) {
    
}
@media screen and (max-width: 500px) {
    display: flex;
}
`

export const FaqWrap = styled.div`

@media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
align-items: center;
}
@media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
align-items: center;
}
`