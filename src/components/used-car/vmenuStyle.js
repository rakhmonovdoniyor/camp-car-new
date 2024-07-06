import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 20px;
  /* padding: 15px; */
  display: flex;
  flex-direction: ${(props) => (props.$Vmenu ? "row" : "column")};
  justify-content: space-between;
  /* gap: 15px; */
  margin-bottom: 20px;
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
`;

export const ImgWrapper = styled.div`
  flex: ${(props) => (props.$Vmenu ? "3" : "3")};
  display: flex;
  justify-content: center;
`;
export const InforWrapper = styled.div`
  flex: ${(props) => (props.$Vmenu ? "6" : "6")};
  display: flex;
  flex-direction: column;
`;
export const InfoTitle = styled.div`

  display: flex;
  flex: 5;
  /* align-items: center; */
  justify-content: space-between;
  padding: 10px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => (props.$iconBtn ? "" : "10px")};
  margin-left: ${(props) => (props.$iconBtn ? "5px" : "")};
  gap: ${(props) => (props.$Vmenu ? "20px" : "")};
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