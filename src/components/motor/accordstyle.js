import styled from "styled-components";

export const Inputwrap = styled.div`
display: flex;
margin-top: 50px;
flex-direction: column;
justify-content:center;
padding-bottom: 50px;
`
export const Line = styled.h1`
width: 280px;
height: 1px;

color: rgba(55, 55, 55, 0.50);;
background-color:  rgba(55, 55, 55, 0.50);

`
export const Hash = styled.h3`
color: var(--text, #373737);
font-family: "Montserrat";
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; 
padding-bottom: 5px;
/* 18px */
/* display: flex; */
/* flex: 3; */

/* border: 1px solid blueviolet; */
`

export const Inputwrap2 = styled.div`
display: flex;
/* justify-content: space-around; */
align-items: center;
/* flex-direction: column; */
/* gap: 20px; */
p{
    width: 20px;
}
div{
}
input {
    width: 90px;
    height: 36px;
    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.60);
   margin-right: 30px;
}
`

export const BrandWrap =styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;

`
export const BrandText = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 30px 0;
`
export const BrandItems = styled.div`
display: flex;
align-items: center;
/* padding: 30px 0 ; */
/* justify-content: center; */

`
export const InputAll = styled.input`
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
/* border: 1px solid #666; */
background: #FFF;
/* margin-left: ${(props) => 
props.$inputleft ? "80px" : ""}; */
/* display: flex;
gap: 20px; */
`

export const Allp =styled.p`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
margin-left: ${(props) => 
props.$inputleft ? "10px" : ""};
/* display: flex;
gap: 30px; */
padding: 10px;
`
export const TwoButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 50px;
`
export const TwoButton1 =styled.button`
width: 115.804px;
height: 38.968px;
border-radius: 60px;
background: ${(props) => 
props.$btn2 ? "white" : "white"} ;

border: ${(props) => 
props.$btn2 ? "1px solid  #006DAB" : "1px solid #FF7A00"} ;
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
cursor: pointer;
 
 button:hover{
  color: white;
  background-color:  ${(props) => 
props.$btn2 ? "#006DAB" : "#FF7A00"} ;
}
`

export const MiniWrap = styled.div`
display: flex;
/* align-items: center;
justify-content: center; */
flex-direction: column;
`
export const Minip = styled.div`
margin-top: 40px;
p{
    color: var(--blue, #006DAB);
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

`
export const Threephoto =styled.div`
display: flex;
`