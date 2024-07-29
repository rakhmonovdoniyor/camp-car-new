import React from 'react'
import { Campcar } from '../../data/motordata';
import { BigWrap, BtnWrap, Camperh6, Item24, StarWrap, StarWrap2 } from '../style/styles';
import { Button } from './vmenuStyle';
import { Link } from 'react-router-dom';
import star from "../../assets/motor-img/bx_bxs-star.png"
import { TuningCampcar } from '../../data/datatuning';

const HMenu = ({exportedData}) => {
    const data = TuningCampcar.maindata;
  const dataLength = data.length;

  console.log("data:", data.length);
  return (
    <Item24>
             <BigWrap>
       

       {exportedData.map((value, key) => {
         return(
           <Link to={`${value.id}`} style={{textDecoration: "none", color: "black"}}>
           <div key={key}> 
           
           <Camperh6>
                     <img src={value.car.photo} alt="car-photo" style={{width: 200 , height: 140}} />
                     <h1>{value.car.name  || "no data" }</h1>
                     <StarWrap>
                     <p>{value.car.company  || "no data"}</p>
                     <StarWrap2><img src={star} alt="startr" /><p>4.5</p></StarWrap2>
                     {/* <img src={star} alt="startr" /><p>4.5</p> */}
                     </StarWrap> 
                     
                     <h2>{value.car.cost  || "no data"}</h2>
                     
                     <BtnWrap>
                     <Button>Order</Button>
                     <Button>Compare</Button>
 
                     </BtnWrap>
             </Camperh6>
           </div>
           </Link>
         )
       })}
      
     </BigWrap>
    </Item24>
  )
}

export default HMenu