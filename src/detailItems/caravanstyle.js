import styled from "styled-components";

export const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Container = styled.div`
display: flex;
`
export const Container2 = styled.div`
display: flex;
flex: 1;
border: 1px solid red;
`
export const Container3 = styled.div`
display: flex;
flex: 1;
flex-direction: column;
border: 1px solid blue;
width: 600px;
gap: 20px;
`
export const Container4 = styled.div`
display: flex;
justify-content: space-between;
gap: 50px;
`
export const Container5 = styled.div`
display: flex;

`
export const Container6 = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const Container7 = styled.div`
display: flex;
flex: 1;
`
export const BTnWrap= styled.div`
display: flex;
/* padding: 50px 0; */

:hover {
    color: white;
    background-color: #006dab;
   
  }
/* justify-content: space-evenly; */
/* @media screen and (max-width: 500px) {
  display: flex;
  margin-top: 50px;
} */
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

export const Wrappp = styled.div`
display: flex;
justify-content: center;
align-items: center;
`