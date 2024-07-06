import React from 'react'
import { BgWrap, BigConWrap, BigWrap, CamperWrap, Camperh5, Camperh6, Items24, Left, Right, TwoFlexWrap, TwoFlexWrap2 } from '../style/styles'
import { Campcar } from '../../data/motordata';
import { Link } from 'react-router-dom';
import ItemPAge from './Itemscar';
import AccordionUsage from './according copy';

const UsedCarPage = () => {

  const data = Campcar.maindata;
  const dataLength = data.length;
  console.log("data:", data.length);

  return (
    <BigConWrap>
     
       <BgWrap $usedcar >
         <h3> Home / Motors</h3> <br /> <br />
           <h2>Our ranges</h2> <br /> <br />
           <h1>Used Car</h1> <br /> <br />
         </BgWrap>
      
   
    
        <TwoFlexWrap>
    
          <Left>
             <AccordionUsage/>
          </Left>

          <Right>
              <ItemPAge/> 
          </Right>

        </TwoFlexWrap>
     
    

    </BigConWrap>
  )
}

export default UsedCarPage