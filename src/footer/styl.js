import styled from "styled-components";

export const Container = styled.div`
display: flex;
background-color: #006DAB;
width: 100%;
height: 350px;
flex-shrink: 0;
@media screen and (max-width: 900px){
 
    width: 100%;
    
}
@media screen and (max-width: 600px){
 
 width: 100%;
 
}
`

export const ConWrap1 = styled.div`
display: flex;
flex: 2;
/* align-items: center;
justify-content: center; */
padding: 50px;
color: white;
h1{
    
    color: white;
font-family: "Montserrat";
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`

export const ConWrap2 = styled.div`
display: flex;
flex: 2;
flex-direction: column;
color: white;
h1{
    padding: 50px 0;
}
p{
    padding: 10px 0;
    color: #FFF;
font-family: "Montserrat";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}

@media screen and (max-width: 900px){
    display: none;
}
`

export const ConWrap3 = styled.div`
display: flex;
flex: 2;
flex-direction: column;
color: white;
h1{
    padding: 50px 0;
}
p{
    padding: 10px 0;
    color: #FFF;
font-family: ""Montserrat"";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
@media screen and (max-width: 900px){
    display: none;
}
`
export const ConWrap4 = styled.div`
display: flex;
flex: 2;
flex-direction: column;
color: #FFF;

h1{
    padding: 50px 0;
    @media screen and (max-width: 900px){
    display: none;
}
}
p{
    padding: 10px 0;
    color: #FFF;
font-family: "Montserrat";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
@media screen and (max-width: 900px){
    display: none;
}
}
`
export const Svg= styled.div`
display: flex;
/* justify-content: center;
align-items: center;  */
svg{
    margin-left: 10px;
}
/* width: 25.429px;
height: 25.429px; */
 color: white; 
 @media screen and (max-width: 900px){
  display: flex;
 
  justify-content: flex-end;
}
@media screen and (max-width: 900px){
  display: flex;
 
  justify-content: center;
  /* align-items: center; */
  padding-top: 50px;
}
`

export const Hidden= styled.div`
@media screen and (max-width: 900px){
    display: none;
}
`