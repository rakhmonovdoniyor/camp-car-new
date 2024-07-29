import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ImageGrid,
  Img,
  ImgBg,
  Innerdiv2,
  Innerdivv,
  MulticarDiv,
  Multih1,
  Parallelogram,
  Sdiv,
  Videos1,
  Videos2,
  Videos3
} from "./multistyle";
import { Carousel1, Cen5, Center4 } from "./style";
import { Pop } from "./pupup";
import BlogsComponent from "./blogs";
// import { Register } from "../Signin/register";
// import { Login } from "../Signin/login";

// import Popupp from "../components/popup/popup";
// import Footer from "../footer/footer";
// import Footerr from "../footer/footer";



export const Multicar = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 900, min: 500 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Cen5>
    <Center4>
    <Carousel1 >
      <Carousel responsive={responsive} 
      
      swipeable={false}
  draggable={false}
  // showDots={true}
//   responsive={responsive}
  // ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  // dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
      
      >
        <MulticarDiv>
          <Img $car1 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car2 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car3 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car4 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car4 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car4 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car4 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car4 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car4 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car4 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        
      </Carousel>

      <Pop/>
     
      <BlogsComponent/>
     
      {/* <h1 style={{ textAlign: "center", margin: "50px 0" }}>Blogs</h1>
      <Cen5>
      <Sdiv>
        <Innerdivv>
          <h1 style={{ paddingBottom: "40px" }}>Camper</h1>
          <p>
          Camping truly is for everyone, from your oldest family member to little campers just trekking out for the first time. Whether your plan is to relax, explore or reconnect, CAMPER campgrounds are a great place to create memories with those you love.
          </p>
        </Innerdivv>
        <Innerdiv2>
          <ImageGrid $sec>
            <MulticarDiv>
              <Img $im11 />
            </MulticarDiv>
            <MulticarDiv>
              <Img $im12 />
            </MulticarDiv>
            <MulticarDiv>
              <Img $im13 />
            </MulticarDiv>
            <MulticarDiv>
              <Img $im14 />
            </MulticarDiv>
            <MulticarDiv>
              <Img $im21 />
            </MulticarDiv>
            <MulticarDiv>
              <Img $im22 />
            </MulticarDiv>
          </ImageGrid>
        </Innerdiv2>
      </Sdiv>
      </Cen5> */}
     
      
  
    </Carousel1>
    </Center4>
    </Cen5>
  );
};
