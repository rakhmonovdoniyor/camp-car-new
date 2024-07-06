import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
`;
export const CampingPlaceBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  /* border: 1px solid red; */
  padding: 60px 10% 60px 10%;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    padding: "0px 70px";
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CampingPlaceImgWrappper = styled.div`
  flex: 1;
  /* border: 1px solid blue; */
  width: 100%;
  img {
    width: 350px;
    max-width: 395px;
    max-height: 300px;
    min-height: 300px;
    border-radius: 10px;
      @media only screen and (max-width: 800px) {
    height: 100%;
  }
    /* &:hover{
      color: linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,.3) 100%);
    transform: skewX(-25deg);
    } */
  }
`;

export const Placename = styled.div`
  color: var(--text, #373737);
  font-family: 'Montserrat';
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const PlaceLocation = styled.div`
  color: var(--text, #373737);
  font-family: 'Montserrat';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CampPlaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  
`

export const LocationInfo =styled.div`
display: flex;
justify-content: start;
align-items: center;
/* border: 1px solid blue; */
gap: 10px;
`