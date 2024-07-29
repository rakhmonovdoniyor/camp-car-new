import styled from "styled-components";

export const CardContainer = styled.div`
margin-top: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: ${(props) => (props.$Vmenu ? "row" : "column")};
  justify-content: space-between;
  /* border: 2px solid red; */
  margin-bottom: 20px;
  margin-left: 50px;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
  h2 {
    font-size: 20px;
    color: #006dab;
  }
  &:hover{
  background-color: #fff;
  transform: scale(1.03);
  transition: 0.8s ease ;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0, 0.3);
}
  @media screen and (max-width: 900px){
    
  }
  @media screen and (max-width: 500px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  flex: 3;
  display: flex;
  /* border: 1px solid black; */
  justify-content: center;
  align-items: center;
`;
export const InforWrapper = styled.div`
  /* flex: 6; */
  display: flex;
  flex-direction: column;
  /* border: 1px solid green; */
  /* width: 670px; */
`;
export const InfoTitle = styled.div`

  display: flex;
  /* flex: 4; */
  /* align-items: center; */
  justify-content: space-between;
  padding: 10px;
  /* border: 1px solid red; */
  gap: 255px;
`;

export const Flex1 = styled.div`
display: flex;
/* flex: 6; */
/* border: 1px solid blue; */
flex-direction: column;
justify-content: space-between;
`
export const Flex2 = styled.div`
display: flex;
/* flex: 6; */
/* border: 1px solid yellow; */
justify-content: end;
align-items: end;
flex-direction: column;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: ${(props) => (props.$iconBtn ? "" : "10px")};
  margin-left: ${(props) => (props.$iconBtn ? "5px" : "")};
  gap: ${(props) => (props.$Vmenu ? "20px" : "")};
  margin-top: 50px;
  :hover {
    color: white;
    background-color: #006dab;
  }
  padding: 20px;
`;

export const Button = styled.button`
  flex: ${(props) => (props.$Vmenu ? "1" : "")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: ${(props) => (props.$iconBtn ? "fit-content" : "100px")};
  background-color: transparent;
  border-radius: ${(props) => (props.$iconBtn ? "0px" : "10px")};
  border: ${(props) =>
    props.$iconBtn ? "1px solid #3737374d" : "2px solid #006dab"};
  color: #006dab;
  font-size: 18px;
  cursor: pointer;
`;


export const StarText = styled.div`
display: flex;
align-items: center;
`