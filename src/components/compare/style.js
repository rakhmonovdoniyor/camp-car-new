import styled from "styled-components";

export const CompareWrapper=styled.div`
display: flex;
align-items: center;
/* justify-content: center; */
flex-direction: column;
gap: 20px;
padding:50px;

`
export const ModelsWrapper=styled.div`
display: flex;
justify-content: space-between;
padding: 30px;
`
export const ModelsWr=styled.div`
color: var(--text, #373737);
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const AddWrapper=styled.div`
display: flex;
align-items: center;
`
export const AddWr=styled.div`
color: var(--text, #373737);
font-size: 21px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const CompareDetaWrapper=styled.div`
display: flex;
gap: 20px;
@media only screen and (max-width: 1200px){
display: grid;
grid-template-areas: "a a"
}
@media only screen and (max-width: 800px){
display: grid;
grid-template-areas: "a"
}
`
export const DetaWrapper=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
`
export const CarWrapper=styled.div`
width: 375px;
height: 198px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`
export const NameOfCar=styled.div`
color: #000;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding: 10px;
`
export const ModelGrommet=styled.div`
display: flex;
/* justify-content: space-evenly; */
gap: 270px;
`
export const ModelGrommetWr=styled.div`
color: rgba(55, 55, 55, 0.80);
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const OrderBTN=styled.button`
cursor: pointer;
margin-top: 30px;
width: 367px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
border: 2px solid var(--blue, #006DAB);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: white;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`
export const OrderBTNWR=styled.p`
color: #006DAB;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`