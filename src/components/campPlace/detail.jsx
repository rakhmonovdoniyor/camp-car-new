import React from "react";
import { BoxWrap, BoxWrap2, BoxWrap3, BoxWrap4, CardWrap4,
   CardWrap5, Cen, Center, Desc, Karta, Line, Wrapper2 } 
   from "./style";

import { CampingPlaces } from "./data";
import img from "../../assets/campingplace/image 12.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import { useParams } from "react-router-dom";
import HomeComponent from "../../popup/kakaomap";
import MapCom from "./kakaomap";

export const DetailPlace = () => {
    const { id } = useParams() ;
    const resultdata = CampingPlaces.maindata.find(
    (value) => value.id === parseInt(id));
    console.log(resultdata);
  return (
   <Center>
    
    <CardWrap5 >
                  <CardWrap4>
                    <img src={img} alt="no photo" />
                    <img src={img} alt="no photo" />
                    <img src={img} alt="no photo" />
                    <img src={img} alt="no photo" />
                    <img src={img} alt="no photo" />
                    <img src={img} alt="no photo" />
                    <img src={img} alt="no photo" />
                   
                  </CardWrap4>
                    
   
        
            
             
                 <BoxWrap>
                <h1>Camping Del Sole Village</h1>
               
                </BoxWrap>

                <BoxWrap>
                <a href="">Location</a> <br />
                <button>Copy Map</button>
                </BoxWrap>

                  <Line></Line>

                   <BoxWrap3>
                    
                      <Wrapper2>            
                      <BoxWrap2>
                      <LocationOnIcon/>
                      <p style={{cursor: "pointer"}}>{resultdata.car.desc.location }</p>
                      </BoxWrap2>
            

                    <BoxWrap2>
                    <AccessTimeIcon/>
                    <p>from</p>
                    <p>{resultdata.car.desc.time }</p>
                    </BoxWrap2>
                    </Wrapper2>
                   

                    <BoxWrap4>
                    <BoxWrap2>
                    <CallIcon/>
                    <p>{resultdata.car.desc.callnumber }</p>
                    </BoxWrap2>

                    
                    <BoxWrap2>
                    <HomeIcon/>
                    <p style={{color:"#006DAB", cursor: "pointer"}}>{resultdata.car.desc.sitename }</p>
                    </BoxWrap2>
                    </BoxWrap4>
                    
                   </BoxWrap3>

                  

                   <Desc>
                    <h3 style={{cursor: "pointer"}}>Description</h3>
                    <p>{resultdata.car.desc.comfort}</p>
                   </Desc>

                   <Karta>
                    <MapCom/>
                   </Karta>
                   
</CardWrap5>
</Center>

  );
};

export default DetailPlace;
