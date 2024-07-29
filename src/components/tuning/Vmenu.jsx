import React from "react";
import {
  Button,
  ButtonWrapper,
  CarWrapper,
  CardContainer,
  ImgWrapper,
  InfoTitle,
  InforWrapper,
  StarText,
} from "./vmenuStyle";
import star from "../../assets/motor-img/bx_bxs-star.png"
import { Campcar } from "../../data/motordata";
import { TuningCampcar } from "../../data/datatuning";

// import { StarWrap2 } from "../homeFilter/styled";

const VMenu = () => {
    const data = TuningCampcar.maindata.slice(0,5);
    const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <>
      {data.map((value, key) => {
        return (
          <CardContainer key={key} $Vmenu>
            <ImgWrapper $Vmenu>
              <img src={value.car.photo} alt="car-photo" width={250} />
            </ImgWrapper>
            <InforWrapper $Vmenu>
              <InfoTitle>
                <div>
                  <h1>{value.car.name || "no data"}</h1>
                  <p>{value.car.company || "no data"}</p>
                </div>
                <div>
                  <h2>{value.car.cost || "no data"}</h2>
                  <StarText>
                  <h2>5.3</h2>
                  <img src={star} alt="startr" />
                  </StarText>
                  
                </div>
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