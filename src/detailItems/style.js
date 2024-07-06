import styled from "styled-components";


export const BigConWrap =styled.div`
display: grid;
justify-content: center;
align-items: center;
padding: 100px;
/* width: 1512px; */

@media screen and (max-width: 500px) {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 55px;
}
`
export const BigCon = styled.div`
/* width: 100%; */

/* display: grid; */
/* justify-content: center;
align-items: center; */
/* @media screen and (max-width: 900px){
  display: grid;
 justify-content: center;
 align-items: center;
 /* padding: 50px; */
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 @media screen and (max-width: 500px) {
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 50px; */
}

` 
export const DetailCom =styled.div`
display: flex;
`

export const Container = styled.div`
display: flex;
padding-top: 20px;
@media screen and (max-width: 1500px){


 width: 100%;

}
@media screen and (max-width: 900px) {
  display: grid;
  flex-direction: column;
  grid-template-rows: repeat(1, 1fr);
 gap: 30px;
}
@media screen and (max-width: 500px){
  display: grid;
  flex-direction: column;
  grid-template-rows: repeat(1, 1fr);
 gap: 30px;

}

`
export const Carphoto = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
/* border: 1px solid red; */
 img { 
    width: 600px;
height: 381px;
/* padding-right: 20px; */
} 
@media screen and (max-width: 900px) {
  /* display: flex;
  align-items: center;
  justify-content: center;
   */
  /* padding: 100px; */
}
@media screen and (max-width: 500px) {
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 100px;
}
`
export const Data = styled.div`
display: flex;
flex: 2;
flex-direction: column;
/* border: 1px solid blue; */
@media screen and (max-width: 500px) {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 310px;
  width:500px;
}
`

export const DataWrapperbox =styled.div`
width: 600px;
height: 360px;
border-radius: 10px;
background: #FFF;

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
@media screen and (max-width: 900px) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* padding: 100px; */
}
@media screen and (max-width: 500px) {
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-left: 100px; */
  /* flex-direction: column; */
  /* padding: 100px; */

}
`
export const Data1 = styled.div`

display: flex;
justify-content: space-between;
/* flex-direction: column; */
/* padding: 5%; */
@media screen and (max-width: 500px) {
  display: flex;
  
}
`
export const CarCost = styled.h1`
color: #006DAB;
font-family: 'Montserrat';
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const Data2 = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: space-evenly;
padding: 5%;
@media screen and (max-width: 500px) {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding-left: 120px;
}
`
 export const Linestyle = styled.div`
width: 560px;
height: 1px;
background: rgba(55, 55, 55, 0.30);
`
 export const ItemOneLine = styled.div`
display: flex;
justify-content: space-between;

 `
 export const TextStylep = styled.p`
color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const TextStylep1 = styled.p`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const ComWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* box-shadow: 0px 0px 10px 0px rgba(5, 0, 0, 0.4); */
@media screen and (max-width: 900px) {
  display: flex;
  flex-direction: column;
  /* padding-bottom:50px;
  gap: 30px;
  padding: 50px; */
  
  
}
@media screen and (max-width: 500px) {
  display: grid;
  /* flex-direction: column; */
  justify-content: center;
  /* align-items: center; */
  grid-template-rows: repeat(1, 1fr);
  /* gap: 30px; */
  /* padding: 50px; */
  padding-left: 60px;
  
  
}
`

export const ComfortText = styled.div`
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
flex: 1;
padding: 35px;
/* padding: 50px; */
/* text-align: center; */
p{
    color: #373737;
font-family: 'Montserrat';
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
h1{
display: flex;
text-align: center;
}
@media screen and (max-width: 900px) {
  display: flex;
  flex-direction: column;
  /* padding-left: 100px; */

/* justify-content: center; */
/* align-items: center; */
}
@media screen and (max-width: 500px) {
  display: flex;
  flex-direction: column;
/* justify-content: center; */
align-items: center;
/* padding: 50px 50px; */
  /* flex: 1; */
  /* width: 400px; */
}
`
export const PWRap = styled.div`
/* display: flex;
align-items: center;
justify-content: center;
flex-direction: column; */
@media screen and (min-width: 500px) {
  display: flex;
  width: 533px;
height: 169px;
flex-shrink: 0; 

}


/* padding: 100px; */
@media screen and (max-width: 500px) {
  display: flex;
  /* flex-direction: column; */
justify-content: center;
align-items: center;
margin-top:  50px;
padding-left:150px ;
padding-right: 50px;

}
`

export const ComfortPhoto = styled.div`
display: flex;
flex: 1;
img{
    width: 600px;
}
@media screen and (max-width: 900px) {
  display: none;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  
}
@media screen and (max-width: 500px) {
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%
  
  
}
`

export const BTnWrap= styled.div`
display: flex;
padding: 50px 0;

:hover {
    color: white;
    background-color: #006dab;
   
  }
/* justify-content: space-evenly; */
@media screen and (max-width: 500px) {
  display: flex;
  margin-top: 50px;
}
`

export const DetailButton = styled.button`
width: 180px;
height: 50px;
border-radius: 10px;
/* background: #FAFAFA; */
cursor: pointer;
color:  ${(props) => (props.$blue ? "#006dab" : "white")};
font-family: 'Montserrat';
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
background-color: transparent;
margin-right: 10px;
border-radius: 10px;
border:  ${(props) => (props.$blue ? " 2px solid #006dab" : "2px solid white")};
  :hover {
    color: ${(props) => (props.$blue ? "white" : "#006dab")};
    background-color: #006dab;
   border: none;
  }
   
/* background-color: var(--blue, #006DAB); */
/* background-color: transparent; */

`

export const Center2 =styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const CmfPhoto2 =styled.div`
@media screen and (max-width: 500px) {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 354px;
height: 255px;
flex-shrink: 0; */
}
@media screen and (max-width: 900px) {
  display: flex;
  /* justify-content: center;
  align-items: center; */
}
@media screen and (min-width: 900px) {
  display: none;
  /* justify-content: center;
  align-items: center; */
}


`
export const Basictabs2responsive =styled.div`
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 900px){
    display: flex;
    justify-content: center;
    align-items: center;
   
}
@media screen and (max-width: 500px){
    display: flex;
    justify-content: center;
    align-items: center;

    }
`
export const CmfPhoto24 =styled.div`

`
export const CmfPhoto25 =styled.div`

`
export const CmfPhoto26 =styled.div`

`