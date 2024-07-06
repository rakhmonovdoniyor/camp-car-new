import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/carousel/Rectangle 2.png";
import img2 from "../assets/carousel/Rectangle 2 (1).png";
import img3 from "../assets/carousel/image.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import MultiCarousel, { Multicar } from "./multicarousel";
// import { Multi, Multicar2 } from "./multi";
import { Multicar } from "./multicarousel";
import { LineText, LineYellow } from "./style";



export const CarouselComponent = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Carousel
        emulateTouch
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        useKeyboardArrows={true}
        autoPlay={true}
        interval={3000}
        // onClickItem = {true}
        // autoFocus ={true}
        // axis={"gorizontal"}
      >
        <div>
          
          <img src={img1} alt="no" style={{ height: "525px" }} />
         
        </div>
        <div>
          <img src={img2} alt="no" style={{ height: "525px" }} />
         
        </div>
        <div>
          <img src={img3} alt="no" style={{ height: "525px" }} />
         
        </div>
      </Carousel>
      <LineText>
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>Recommend   </h1>
        <LineYellow/>
        </LineText>
      <Multicar/>
    </div>
    
  );
};
