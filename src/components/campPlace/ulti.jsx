import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CampingPlaceImgWrappper } from "./newdetstyle";
import img1 from "../../assets/campingplace/image 11.png"

const MUlti = () => {




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    slidesToSlide: 1 // optional, default to 1.
  }
};

return(
    

<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <CampingPlaceImgWrappper>
    <img src={img1} alt="ghjk" />
  </CampingPlaceImgWrappper>
  <CampingPlaceImgWrappper>
  <img src={img1} alt="img" />
    </CampingPlaceImgWrappper>
  <CampingPlaceImgWrappper>
  <img src={img1} alt="img" />
    </CampingPlaceImgWrappper>
  <CampingPlaceImgWrappper>
  <img src={img1} alt="img" />
    </CampingPlaceImgWrappper>
    <CampingPlaceImgWrappper>
  <img src={img1} alt="img" />
    </CampingPlaceImgWrappper>
    <CampingPlaceImgWrappper>
  <img src={img1} alt="img" />
    </CampingPlaceImgWrappper>
    <CampingPlaceImgWrappper>
  <img src={img1} alt="img" />
    </CampingPlaceImgWrappper>
</Carousel>
)
}

export default MUlti;