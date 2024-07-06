import React, { useState } from 'react'
import { BgWrap, BigWrap, Btn2, BtnWrap, BtnWrap2, Button, Button2, COlumnItemLeft, COlumnItemLeft2, CamperWrap, Camperh5, Camperh6, INput227, INput227227, Item24, Item242, Item242242, ItemLeft, ItemLeft2, ItemRight, ItemRight2, Items24, LeftSearch, RightIn, RightIn2, StarWrap, StarWrap2 } from '../style/styles'
// import { Campcar } from '../../data/motordata';
import { Link } from 'react-router-dom';
import menu from "../../assets/motor-img/clarity_grid-view-solid.png"
import navmenu from "../../assets/motor-img/ic_round-view-list.png"
// import Vmenu from './Vmenu';
// import AccordionUsage from './according copy';
import VMenu from './Vmenu';
import ButtonHV from './btn';
import star from "../../assets/motor-img/bx_bxs-star.png"
import TemporaryDrawer from '../../filter/filterdrawer';
import { UsedCarCampcar } from '../../data/datausedcar';

const ItemPAge = () => {
    
    
  const data = UsedCarCampcar.maindata;
  const dataLength = data.length;

  console.log("data:", data.length);
  const [active, setActive] = useState(false)
    

  function handleVMenu() {
      setActive(false);
    }
    function handleHMenu(){
      setActive(true )
    }

  return (
    <Item24>
      
       <Item242>
       <LeftSearch>
            <TemporaryDrawer/>
        </LeftSearch>
           <ItemLeft>
           <p>Item</p>
           <p style={{ color:" #006dab"}}>{dataLength}</p>
            </ItemLeft>

           <ItemRight>
            <RightIn>
            <p>Sort by</p>
            <INput227 type="text" placeholder='Select' />
            <INput227 style={{width:60, height: 30, paddingLeft:10}} type="text" placeholder='60' />
            </RightIn>
            
            <BtnWrap $iconBtn>
                         <Btn2 $big onClick={handleVMenu}>
                          <img src={menu} alt="menu-h" />
                          </Btn2>
                        <Btn2 $small onClick={handleHMenu}>
                        <img src={navmenu} alt="nv-menu" />
                        </Btn2>
            </BtnWrap>
           </ItemRight>
        </Item242>


        <Item242242>
      

           <ItemLeft2>

           <LeftSearch>
            <TemporaryDrawer/>
        </LeftSearch>
           
            <COlumnItemLeft2>
            <p>Item</p>
            <p style={{ color:" #006dab"}}>{dataLength}</p>
            </COlumnItemLeft2>
           
           
            <BtnWrap2 $iconBtn>
                          <Button2 $iconBtn onClick={handleVMenu}>
                          <img src={menu} alt="menu-h" />
                          </Button2>
                        <Button $iconBtn onClick={handleHMenu}>
                        <img src={navmenu} alt="nv-menu" />
                        </Button>
            </BtnWrap2>
            </ItemLeft2>
                 
            

           <ItemRight2>
            <RightIn2>
            <p>Sort by</p>
            <INput227227 type="text" placeholder='Select' />
            <INput227 style={{width:60, height: 30, paddingLeft:10}} type="text" placeholder='60' />
            </RightIn2>
            
            {/* <BtnWrap2 $iconBtn>
                          <Button2 $iconBtn onClick={handleVMenu}>
                          <img src={menu} alt="menu-h" />
                          </Button2>
                        <Button $iconBtn onClick={handleHMenu}>
                        <img src={navmenu} alt="nv-menu" />
                        </Button>
            </BtnWrap2> */}
                        
           </ItemRight2>

        </Item242242>
      
    <BigWrap>
       

      {data.map((value, key) => {
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

export default ItemPAge;