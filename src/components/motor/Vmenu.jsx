import React from "react";
import {
  Button,
  ButtonWrapper,
  CarWrapper,
  CardContainer,
  Flex1,
  Flex2,
  ImgWrapper,
  InfoTitle,
  InforWrapper,
  StarText,
} from "./vmenuStyle";
import star from "../../assets/motor-img/bx_bxs-star.png"
import { Campcar } from "../../data/motordata";

// import { StarWrap2 } from "../homeFilter/styled";

const VMenu = ({exportedData}) => {
    const data = Campcar.maindata.slice(0,6);
    const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <>
      {exportedData.map((value, key) => {
        return (
          <CardContainer key={key} $Vmenu>
            <ImgWrapper $Vmenu>
              <img src={value.car.photo} alt="car-photo" width={300} />
            </ImgWrapper>
            <InforWrapper $Vmenu>
              <InfoTitle>
                <Flex1>
                  <h1>{value.car.name || "no data"}</h1>
                  <p>{value.car.company || "no data"}</p>
                </Flex1>
                <Flex2>
                  <h2>{value.car.cost || "no data"}</h2>
                  <StarText>
                  <h2>5.3</h2>
                  <img src={star} alt="startr" />
                  </StarText>
                  
                </Flex2>
              </InfoTitle>
              <ButtonWrapper $Vmenu>
                <Button $Vmenu>Order</Button>
                <Button $Vmenu>Compare</Button>
              </ButtonWrapper>
            </InforWrapper>
          </CardContainer>
        );
      })}
    </>
  );
};

export default VMenu;