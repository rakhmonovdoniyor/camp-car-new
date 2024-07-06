import styled from "styled-components";
import rasm1 from "../assets/homepage/image.png"
import rasm2 from "../assets/homepage/image2.png"
import rasm3 from "../assets/homepage/image3.png"
import rasm4 from "../assets/homepage/image4.png"
import rasm5 from "../assets/homepage/image5.png"
import rasm6 from "../assets/homepage/image6.png"
import rasm7 from "../assets/homepage/image7.png"
import rasm8 from "../assets/homepage/image8.png"

export const Center4 = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
export const Carousel1 = styled.div`
/* padding: 0px 100px ; */
display: grid;
justify-content: center;
align-items: center; 
/* flex-direction: column; */
`
export const Carouselimg = styled.div`
display: flex;
width: 100%;
background-position: 100%;
`
export const Popuph1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 50px;
`

export const Popimg=styled.div`
background-image: ${(props) => {
    if (props.$pop1) {
      return `url(${rasm1})`;

    } else if (props.$pop2) {
      return `url(${rasm2})`;

    } else if (props.$pop3) {
      return `url(${rasm3})`;

    } else if (props.$pop4) {
      return `url(${rasm4})`;

    } else if (props.$pop5) {
      return `url(${rasm5})`;

    } else if (props.$pop6) {
      return `url(${rasm6})`;

    } else if (props.$pop7) {
      return `url(${rasm7})`;

    } else if (props.$pop8) {
      return `url(${rasm8})`;

    } else {
      return 'url("path-to-default-image.jpg")'; // Default background image
    }
  }};
  
   background-size: cover;
   background-position: 100%;
  background-repeat: no-repeat; 
  width:300px;
  height: 300px; 
display:flex;
align-items:center;
justify-content:center; 
text-align:center; 
flex-direction: column;



`



export const WrapPopimg = styled.div`
display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 500px){
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-items: center;
}

 

`

export const LineYellow = styled.div`
width: 170px;
height: 2px;
background: #FF7A00;
`
export const LineText = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0;
`

export const Cen5 =styled.div`
display: grid;
justify-content: center;
align-items: center;
@media screen and (min-width: 900px){
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
`