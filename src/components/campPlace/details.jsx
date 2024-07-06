import {
  CampPlaceImgWrapper,
  CampPlaceInfoContainer,
  CampPlaceInfoContainer2,
  CampPlaceLocation,
  CampPlaceName,
  DescriptionWrapper,
  LocationInfo,
  LocationInfoLeft,
  LocationInfoRight,
  LocationInfosContainer,
  MapWrapper1,
  DividerWrapper
} from "./detail";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import { campingPlace } from "./mosck";
import Button from "@mui/material/Button";
// import { DividerWrapper } from "../../styles/carInfoStyle";
import location1 from "../../assets/campingplace/carbon_location.png";
import phone1 from "../../assets/campingplace/carbon_phone.png";
import clock1 from "../../assets/campingplace/bi_clock.png";
import home1 from "../../assets/campingplace/codicon_home.png";
import { useEffect } from "react";
import place1 from "../../assets/campingplace/image 11.png";
import place2 from "../../assets/campingplace/image 11.png";
import place3 from "../../assets/campingplace/image 11.png";
import place4 from "../../assets/campingplace/image 11.png";
import place5 from "../../assets/campingplace/image 11.png";
import place6 from "../../assets/campingplace/image 11.png";
import place7 from "../../assets/campingplace/image 11.png";
import place8 from "../../assets/campingplace/image 11.png";
import place9 from "../../assets/campingplace/image 11.png";
import MapCom from "./kakaomap";
import { CampingPlaces } from "./data";

const CampingPlaceInfoComponent = () => {
  //multi carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  //use params
  const { id } = useParams();
  console.log("userId", id);
  const data = CampingPlaces.maindata;
  const resultData = data.find((value) => value.id === parseInt(id));
  console.log("id Info:", resultData);

  //map edits
  // const new_script = (src) => {
  //   return new Promise((resolve, reject) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.addEventListener("load", () => {
  //       resolve();
  //     });
  //     script.addEventListener("error", (e) => {
  //       reject(e);
  //     });
  //     document.head.appendChild(script);
  //   });
  // };

  // useEffect(() => {
  //   const my_script = new_script(
  //     "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c98f8997cad4ba538b73bfec3d6153dc"
  //   );
  //   my_script.then(() => {
  //     console.log("script loaded!!!");
  //     const kakao = window["kakao"];
  //     const latitude = resultData.campingPlace.map.latitude;
  //     const longitude = resultData.campingPlace.map.longitude;

  //     kakao.maps.load(() => {
  //       const mapContainer = document.getElementById("map");
  //       const options = {
  //         center: new kakao.maps.LatLng(latitude, longitude),
  //         level: 3,
  //       };
  //       const map = new kakao.maps.Map(mapContainer, options);

  //       const markerPositions = [new kakao.maps.LatLng(latitude, longitude)];

  //       markerPositions.forEach((position) => {
  //         const marker = new kakao.maps.Marker({
  //           position: position,
  //         });
  //         marker.setMap(map);
  //       });
  //     });
  //   });
  // }, [
  //   resultData.campingPlace.map.latitude,
  //   resultData.campingPlace.map.longitude,
  // ]);

  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };
  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e49611d442be90c7ec3aef4e29cc18ac"
    );
    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(35.8998931,128.6375522),
          level: 5,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        const markerPositions = [
          new kakao.maps.LatLng(35.88419, 128.7029796),
          new kakao.maps.LatLng(37.5666791, 126.9782914),
        ];

        markerPositions.forEach((position) => {
          const marker = new kakao.maps.Marker({
            position: position,
          });
          marker.setMap(map);
        });
      });
    });
  }, []);

  return (
    <CampPlaceInfoContainer>
      <CampPlaceInfoContainer2>
        <Carousel
          showDots={false}
          arrows={false}
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <CampPlaceImgWrapper>
            <img src={place1} alt="img" />
          </CampPlaceImgWrapper>
          <CampPlaceImgWrapper>
            <img src={place2} alt="img" />
          </CampPlaceImgWrapper>
          <CampPlaceImgWrapper>
            <img src={place3} alt="img" />
          </CampPlaceImgWrapper>
          <CampPlaceImgWrapper>
            <img src={place4} alt="img" />
          </CampPlaceImgWrapper>
          <CampPlaceImgWrapper>
            <img src={place5} alt="img" />
          </CampPlaceImgWrapper>
          <CampPlaceImgWrapper>
            <img src={place6} alt="img" />
          </CampPlaceImgWrapper>
          <CampPlaceImgWrapper>
            <img src={place7} alt="img" />
          </CampPlaceImgWrapper>
          <CampPlaceImgWrapper>
            <img src={place8} alt="img" />
          </CampPlaceImgWrapper>
          <CampPlaceImgWrapper>
            <img src={place9} alt="img" />
          </CampPlaceImgWrapper>
        </Carousel>
        <CampPlaceName>{resultData.car.name}</CampPlaceName>
        <CampPlaceLocation>
          {resultData.car.desc.location}
          <Button
            size="small"
            sx={{
              height: "25px",
              width: "120px",
              border: "1px solid  #FF7A00",
              color: "#FF7A00",
            }}
          >
            Copy map
          </Button>
        </CampPlaceLocation>
        <DividerWrapper></DividerWrapper>

        <LocationInfosContainer>
          <LocationInfoLeft>
            <LocationInfo>
              <img src={location1} alt="img" />
              {resultData.car.desc.location}
            </LocationInfo>
            <LocationInfo>
              <img src={phone1} alt="img" />
              {resultData.car.desc.callnumber}
            </LocationInfo>
          </LocationInfoLeft>
          <LocationInfoRight>
            <LocationInfo>
              <img src={clock1} alt="img" />
              from
              <div style={{ color: "#FF7A00", fontWeight: "500" }}>
                {resultData.car.desc.time}
              </div>
              to
              <div style={{ color: "#FF7A00", fontWeight: "500" }}>
                {resultData.car.desc.time}
              </div>
            </LocationInfo>
            <LocationInfo>
              <img src={home1} alt="img" />
              <div style={{ color: "#006DAB" }}>
                {resultData.car.desc.sitename}
              </div>
            </LocationInfo>
          </LocationInfoRight>
        </LocationInfosContainer>

        <DescriptionWrapper>
          <h3>Description</h3>
          {resultData.car.desc.comfort}
        </DescriptionWrapper>

        {/* <div style={{width: "100%"}}> */}
        <MapWrapper1>
          <div id="map" className="map" />
          {/* <MapCom/> */}
        </MapWrapper1>
        {/* </div> */}
      </CampPlaceInfoContainer2>
    </CampPlaceInfoContainer>
  );
};

export default CampingPlaceInfoComponent;