import React from "react";
import { CardWrap, CardWrap2, Center } from "./style";
// import {  UsedCarCampcar } from "./mockdata";

import { Link } from "react-router-dom";
import { CampingPlaces } from "./data";

export const CampPlace = () => {
  const data = CampingPlaces.maindata;
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <Center>
    <CardWrap>
                    
    { 
        data.map((value, key) => {
            return(
              <Link to={`${value.id}`} style={{textDecoration: "none", color: "black"}}>
                <CardWrap2 key={key}>
                  

                   
                    <img src={value.car.photo} alt="car-photo"  /> 
                    <h3>{value.car.name  || "no data" }</h3> 
                    <p>{value.car.location}</p>
                  

                  
                   

                    </CardWrap2>
                    

      
                </Link>
            );
            })}

</CardWrap>
</Center>
  );
};

export default CampPlace;
