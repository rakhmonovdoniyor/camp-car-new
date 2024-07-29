import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  CarBoxButtonWrapper2,
  CarInfoContainer,
  CompanyName,
  DividerWrapper,
  DocsWrapper,
  HeadTitle,
  ImageAndInfoContainer,
  ImageWrapper,
  ImgWrapper,
  InfoText,
  InfoTitle,
  InfoWrapper,
  InfoWrapper2,
  NameAndPriceWrapper,
  NameOfCar,
  OtherInfosContainer,
//   Datainfo,
  WhiteButton,
  Datainfo,
} from "./motodetstyle";
// import comfort1 from "../assets/comfort.png";
// import tidying1 from "../assets/tidying.png";
// import ventilated1 from "../assets/ventilated.png";
// import heating1 from "../assets/heating.png";
// import {  MotorBgImage } from "../../styles/motorStyled";
import TabsComponent from "./tabbbb/newtabs";
// import img111 from '../assets/campCarOboi-5.jpg'
import { BgWrap } from "../components/style/styles";
import { BTnWrap, DetailButton, DetailCom } from "./style";
// import { TuningC } from "../data/motordata";
import { TuningCampcar } from "../data/datatuning";

const TuningDetail = () => {
    const { id } = useParams() ;
    const resultdata = TuningCampcar.maindata.find(
    (value) => value.id === parseInt(id));
    console.log(resultdata);

  return (
    <CarInfoContainer>
        <BgWrap $home >
        
        <h1 >{resultdata.car.name}</h1> 
        <DetailCom>
          <BTnWrap>
        <DetailButton>ADD TO CART</DetailButton>
        <DetailButton>COMPARE</DetailButton>
        </BTnWrap>
        </DetailCom>
        
      </BgWrap>
      <div style={{padding: '30px 0px 0px 0px'}}>

        
      <ImageAndInfoContainer $1>
        <InfoWrapper2>
        <ImageWrapper>
          <img src={resultdata.car.photo || "Data not found"} alt="car image" />
        </ImageWrapper>
        </InfoWrapper2>
        <InfoWrapper2>
        <InfoWrapper>
          <NameAndPriceWrapper>
            <div>
              <NameOfCar $MarginBottom10px>
                {resultdata.car.name || "Data not found"}
              </NameOfCar>
              <div>{resultdata.car.type || "Data not found"}</div>
            </div>
            <NameOfCar $ColorBlue $Size30px>
              {resultdata.car.cost || "Data not found"}
            </NameOfCar>
          </NameAndPriceWrapper>
          <DividerWrapper></DividerWrapper>
          <OtherInfosContainer>
            <Datainfo>
              <CompanyName $Color000 $ Size18px>
                Company
              </CompanyName>
              <CompanyName $Color000 $ Size18px>
                People
              </CompanyName>
              <CompanyName $Color000 $ Size18px>
                License type
              </CompanyName>
            </Datainfo>

            <Datainfo>
              <CompanyName>{resultdata.car.company}</CompanyName>
              <CompanyName>{resultdata.car.people}</CompanyName>
              <CompanyName>{resultdata.car.license}</CompanyName>
            </Datainfo>
          </OtherInfosContainer>
        </InfoWrapper>
        </InfoWrapper2>
      </ImageAndInfoContainer>

      <div style={{ marginTop: "70px" }}>
        <ImageAndInfoContainer>
          <DocsWrapper>
            <InfoTitle>Comfort</InfoTitle>
            <InfoText>{resultdata.car.desc.comfort1}</InfoText>
          </DocsWrapper>
          <ImgWrapper>
            <img src={resultdata.car.desc.cmfphoto} alt="img" />
          </ImgWrapper>
          <DocsWrapper $hideORshow>
            <InfoTitle>Comfort</InfoTitle>
            <InfoText>{resultdata.car.desc.comfort1}</InfoText>
          </DocsWrapper>
        </ImageAndInfoContainer>

        <ImageAndInfoContainer>
          <ImgWrapper>
            <img src={resultdata.car.desc.cmfphoto} alt="img" />
          </ImgWrapper>
          <DocsWrapper>
            <InfoTitle>Tidying away is child’s play!</InfoTitle>
            <InfoText>{resultdata.car.desc.comfort2}</InfoText>
          </DocsWrapper>
          <DocsWrapper $hideORshow>
            <InfoTitle>Tidying away is child’s play!</InfoTitle>
            <InfoText>{resultdata.car.desc.comfort2}</InfoText>
          </DocsWrapper>
        </ImageAndInfoContainer>

        <ImageAndInfoContainer>
          <DocsWrapper>
            <InfoTitle>Ventilated , Lit up</InfoTitle>
            <InfoText>{resultdata.car.desc.comfort3}</InfoText>
          </DocsWrapper>
          <ImgWrapper>
            <img src={resultdata.car.desc.cmfphoto} alt="img" />
          </ImgWrapper>
          <DocsWrapper $hideORshow>
            <InfoTitle>Ventilated , Lit up</InfoTitle>
            <InfoText>{resultdata.car.desc.comfort3}</InfoText>
          </DocsWrapper>
        </ImageAndInfoContainer>

        <ImageAndInfoContainer>
          <ImgWrapper>
            <img src={resultdata.car.desc.cmfphoto} alt="img" />
          </ImgWrapper>
          <DocsWrapper>
            <InfoTitle>Tidying away is child’s play!</InfoTitle>
            <InfoText>{resultdata.car.desc.comfort2}</InfoText>
          </DocsWrapper>
          <DocsWrapper $hideORshow>
            <InfoTitle>Easy access</InfoTitle>
            <InfoText>{resultdata.car.desc.comfort2}</InfoText>
          </DocsWrapper>
        </ImageAndInfoContainer>

        <ImageAndInfoContainer>
          <DocsWrapper>
            <InfoTitle>Heating when driving</InfoTitle>
            <InfoText>{resultdata.car.desc.comfort2}</InfoText>
            <CarBoxButtonWrapper2>
            <Link to={`cart`} style={{textDecoration: "none", width: "100%"}}>
              <WhiteButton>ADD TO CART</WhiteButton></Link>
              <WhiteButton>COMPARE</WhiteButton>
            </CarBoxButtonWrapper2>
          </DocsWrapper>
          <ImgWrapper>
            <img src={resultdata.car.desc.cmfphoto} alt="img" />
          </ImgWrapper>
          <DocsWrapper $hideORshow>
            <InfoTitle>Heating when driving</InfoTitle>
            <InfoText>{resultdata.car.desc.comfort2}</InfoText>
            <CarBoxButtonWrapper2>
            <Link to={`cart`} style={{textDecoration: "none",width: "100%"}}>
              <WhiteButton>ADD TO CART</WhiteButton>
            </Link>
              <WhiteButton>COMPARE</WhiteButton>
            </CarBoxButtonWrapper2>
          </DocsWrapper>
        </ImageAndInfoContainer>
      </div>
      </div>
      <TabsComponent/>
    </CarInfoContainer>
  );
};

export default TuningDetail;