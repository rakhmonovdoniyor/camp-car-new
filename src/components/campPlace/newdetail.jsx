import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CampingPlaces } from "./data";

import place1 from "../../assets/campingplace/image 11.png";
import place2 from "../../assets/campingplace/image 11.png";
import place3 from "../../assets/campingplace/image 11.png";
import place4 from "../../assets/campingplace/image 11.png";
import place5 from "../../assets/campingplace/image 11.png";
import place6 from "../../assets/campingplace/image 11.png";
import place7 from "../../assets/campingplace/image 11.png";
import place8 from "../../assets/campingplace/image 11.png";
import place9 from "../../assets/campingplace/image 11.png";

import clock1 from "../../assets/campingplace/bi_clock.png"
import home1 from "../../assets/campingplace/codicon_home.png"
import phone1 from "../../assets/campingplace/carbon_phone.png"
import location1 from "../../assets/campingplace/codicon_home.png"
import { CampPlaceWrapper, Container, PlaceLocation, Placename } from "./newdetstyle";
import { CampingPlaceImgWrappper, CampPlaceImgWrapper, LocationInfo } from "./detail";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect } from "react";


export const Campinginfo = () => {




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const { id } = useParams();
console.log("userId", id);
const data1 = CampingPlaces.maindata;
const resultData = data1.find((value) => value.id === parseInt(id));
console.log("id Info:", resultData);


//map edits
// const new_script = (src) => {
//     return new Promise((resolve, reject) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.addEventListener("load", () => {
//         resolve();
//       });
//       script.addEventListener("error", (e) => {
//         reject(e);
//       });
//       document.head.appendChild(script);
//     });
//   };

//   useEffect(() => {
//     const my_script = new_script(
//       "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c98f8997cad4ba538b73bfec3d6153dc"
//     );
//     my_script.then(() => {
//       console.log("script loaded!!!");
//       const kakao = window["kakao"];
//       const latitude = resultData.car.map.latitude;
//       const longitude = resultData.car.map.longitude;

//       kakao.maps.load(() => {
//         const mapContainer = document.getElementById("map");
//         const options = {
//           center: new kakao.maps.LatLng(latitude, longitude),
//           level: 3,
//         };
//         const map = new kakao.maps.Map(mapContainer, options);

//         const markerPositions = [new kakao.maps.LatLng(latitude, longitude)];

//         markerPositions.forEach((position) => {
//           const marker = new kakao.maps.Marker({
//             position: position,
//           });
//           marker.setMap(map);
//         });
//       });
//     });
//   }, [
//     resultData.campingPlace.map.latitude,
//     resultData.campingPlace.map.longitude,
//   ]);
return(

<Container>
<CampPlaceWrapper>
<Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite
  autoPlay
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
//   dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
          <CampingPlaceImgWrappper>
            <img src={place1} alt="img" />
          </CampingPlaceImgWrappper>
          <div>
            <img src={place2} alt="img" />
          </div>
          <div>
            <img src={place3} alt="img" />
          </div>
          <div>
            <img src={place4} alt="img" />
          </div>
          {/* <div>
            <img src={place5} alt="img" />
          </div>
          <div>
            <img src={place6} alt="img" />
          </div>
          <div>
            <img src={place7} alt="img" />
          </div>
          <div>
            <img src={place8} alt="img" />
          </div>
          <div>
            <img src={place9} alt="img" />
          </div> */}
</Carousel>
       <Placename>{resultData.car.name}</Placename>
        <PlaceLocation>
          {resultData.car.location}
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
        </PlaceLocation>
        {/* {/* <DividerWrapper></DividerWrapper>  */}

        
          <div>
          <div>
            <LocationInfo>
              <img src={location1} alt="img" />
              {resultData.car.location}
            </LocationInfo>
            <LocationInfo>
              <img src={phone1} alt="img" />
              {resultData.car.desc.callnumber}
            </LocationInfo>
          </div>
          <div>
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
                {resultData.car.company}
              </div>
            </LocationInfo>
          </div>
        </div>

</CampPlaceWrapper>
</Container>
)
}

export default Campinginfo;