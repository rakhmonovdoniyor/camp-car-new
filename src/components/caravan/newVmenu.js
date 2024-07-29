import styled from "styled-components";

export const CostText = styled.p`
  /* padding: ${(props) => (props.$paddingTnB ? `` : ``)}; */
  color: ${(props) => (props.$colorWhite ? `white` : `#373737`)};
  font-family: 'Montserrat';
  font-size: ${(props) => (props.$fontSize ? `16px` : `14px`)};
  font-style: normal;
  font-weight: ${(props) => (props.$fontWeight ? `600` : `500`)};
  line-height: 100%; /* 14px */
`;




export const CarBoxContainer = styled.div`
  max-width: ${(props) => (props.$maxWidthForColumn ? `1400px` : ``)};
  padding: 37px 0px 60px 0px;
  /* border: 1px solid red; */
  display: ${(props) => (props.$flex ? `flex` : `grid`)};
  flex-direction: ${(props) => (props.$column ? `column` : ``)};
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    padding: "0px 70px";
  }
  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    padding: "0px 70px";
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    /* display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1; */
  }
`;

export const CarBox = styled.div`
  /* border: 1px solid black; */
  display: ${(props) => (props.$flexBox ? `flex` : ``)};
  justify-content: center;
  align-items: center;
  max-width: ${(props) => (props.$maxWidth ? `800px` : `100%`)};
  flex: 5;
  gap: 50px;
  /* border: 1px solid red; */
  border-radius: 25px;
  padding: 15px 10px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  &:hover {
        background-color: #FAFAFA;
        transform: scale(1.02);
        transition: 0.5s ease;
        cursor: pointer;
        /* border: 0.9px solid #006DAB; */
        border-radius: 25px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    }
`;

//other components' container of the carbox img
export const CarBoxImgWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  img {
    width: 100%;
    max-height: 150px;
  }
`;

//motor img wrapper
export const CarBoxImage = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */
  img {
    width: 100%;
    height: ${(props) => (props.$hight150px ? `150px` : ``)};
  }
  @media only screen and (min-width: 700px) {
    max-width: ${(props) => (props.$maxWidthForImage ? `280px` : ``)};
    min-width: ${(props) => (props.$maxWidthForImage ? `280px` : ``)};
  }
`;

export const CarBoxInfo = styled.div`
  /* border: 1px solid red; */
  flex: 5;
  /* gap: 100px; */
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: ${(props) => (props.$paddingTwoSides ? `0px 20px` : `0px`)};
  @media only screen and (max-width: 500px) {
    padding: ${(props) => (props.$paddingTwoSides ? `0px 10px` : `0px`)};
  }
`;

export const Price = styled.p`
  color: ${(props) => (props.$colorWhiteH1 ? `white` : `#006DAB`)};
  font-family: 'Montserrat';
  font-size: ${(props) => (props.$fontSize80 ? `80px` : `22px`)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media only screen and (max-width: 700px) {
    font-size: ${(props) => (props.$fontSize80 ? `80px` : `16px`)};
    font-size: ${(props) => (props.$fontSize80 ? `40px` : ``)};
  }
  @media only screen and (max-width: 350px) {
    font-size: ${(props) => (props.$fontSize80 ? `25px` : ``)};
  }
`;

//when it column
export const CarBoxPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
  /* border: 1px solid blue; */
  gap: 266px;
`;

export const BrandName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text, #373737);
  font-family: 'Montserrat';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 12px 0px 18px 0px;
`;

export const CarBoxRateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CarBoxButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.$marginTop45 ? `45px` : `13px`)};
  gap: 10px;
  width: 100%;
`;

export const CarBoxButton = styled.button`
  width: 100%;
  padding: ${(props) => (props.$paddingRnL ? `2% 3.5%` : `3% 5%`)};
  border-radius: 10px;
  border: 1px solid var(--blue, #006dab);
  border: ${(props) => props.$Border1 ? `2px solid white` : ``};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  color: var(--blue, #006dab);
  color: ${(props) => props.$colorWhite2 ? `white` : ``};
  font-family: 'Montserrat';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: ${(props)=> props.$BgColorTransparent ? `transparent` : `#fff`};
  cursor: pointer;
  &:hover {
    background-color: #006dab;
    color: #fff;
    border: 1px solid #006dab;

  }
  @media only screen and (min-width: 500px) {
  padding: ${(props) => (props.$paddingColumn ? `8px 18px` : ``)};
     
  }
`;

export const MainDrawer = styled.div`
  .Button {
    display: none;
    /* border:1px solid red; */
    padding: 0;

    @media only screen and (max-width: 900px) {
      display: flex;
      justify-content: start;
    }
  }
`;
export const DrawerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 40px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  border-radius: 5px;
`;