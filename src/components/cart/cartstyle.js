
import styled from "styled-components"

export const MainCartpage=styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
margin-bottom: 50px;
`

export const Cartpage=styled.div`
display: flex;
/* justify-content: space-evenly; */
gap: 30px;

justify-content: center;
@media only screen and (max-width: 1200px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`
export const RightCartpage=styled.div`

display: flex;
flex-direction: column;
align-items: center; 
justify-content: center; 
width: 321px;
@media only screen and (max-width: 1200px){
    padding-left: 50px;
}
@media only screen and (max-width: 750px){
    padding-left: 50px;
}
`
export const RightCartpage1=styled.div`
overflow-y: scroll;
height: 1100px;
scrollbar-width: none;
@media only screen and (max-width: 1200px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

export const CarNameCarPrice=styled.div`
/* display: flex;
flex-direction: column; */
@media only screen and (max-width: 1200px){
    display: flex;
    justify-content: space-between;
}
`
export const CarName=styled.div`
color: var(--text, #373737);
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const CarPrice=styled.div`
color: var(--blue, #006DAB);
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-top: 10px;
`
export const Description=styled.div`
padding-top: 30px;
color: #373737;
font-size: 17px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const CarDescription=styled.div`
padding-top: 7px;
color: rgba(55, 55, 55, 0.70);
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 210px;
`

export const Payment=styled.button`
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
width: 311px;
height: 45px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
border: none;
@media only screen and (max-width: 1200px){
    width: 674px;
   
}
@media only screen and (max-width: 750px){
    width: 354px;
}
`
export const Order=styled.button`
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
width: 311px;
height: 45px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
border: none;
margin-top: 70px;
margin-bottom: 100px;
@media only screen and (max-width: 1200px){
    width: 674px;
}
@media only screen and (max-width: 750px){
    width: 354px;
}
`
export const PaymentWR=styled.p`
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const Enter=styled.p`
padding-top: 30px;
padding-bottom: 30px;
color: #000;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const NameDeta=styled.p`
color: rgba(55, 55, 55, 0.80);
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-bottom: 10px;
padding-top: 20px;
`
export const NameDetaIn=styled.input`
cursor: pointer;
padding-left: 10px;
border: none;
width: 311px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
@media only screen and (max-width: 1200px){
    width: 674px;
}
@media only screen and (max-width: 750px){
    width: 354px;
}
`
export const NameDetaSelect=styled.select`
padding: 10px;
border: none;
width: 311px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
@media only screen and (max-width: 1200px){
    width: 674px;
}
@media only screen and (max-width: 750px){
    width: 354px;
}
`
export const OptionCart=styled.option`
color: rgba(55, 55, 55, 0.60);
font-family: "Open Sans";
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
 
export const Cart=styled.p`
color: var(--text, #373737);
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const CartCar=styled.div`
width: 811px;
height: 476px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

@media only screen and (max-width: 1200px){
    width: 454px;
    height: 358px;
}
@media only screen and (max-width: 750px){
    width: 354px;
height: 258px;

}
`
export const CartCarIMG=styled.img`
width: 683px;
height: 406px;
@media only screen and (max-width: 1200px){
    width: 454px;
height: 258px;
flex-shrink: 0;

}
@media only screen and (max-width: 700px){
    width: 334px;
    height: 199px;
flex-shrink: 0;

}
`
export const Purchase=styled.div`
width: 350px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
display: flex;
gap:15px;
align-items: center;
justify-content: center;
border: none;
margin-top: 20px;
`
export const PurchasePrice=styled.p`
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const Price=styled.p`

color: #373737;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
`