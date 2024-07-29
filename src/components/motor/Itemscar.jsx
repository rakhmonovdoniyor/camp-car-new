import React, { useState } from 'react'
import { BgWrap, BigWrap, Btn2, BtnWrap, BtnWrap2, Button, Button2, COlumnItemLeft, COlumnItemLeft2, CamperWrap, Camperh5, Camperh6, INput227, INput227227, Item24, Item242, Item242242, ItemLeft, ItemLeft2, ItemRight, ItemRight2, Items24, LeftSearch, RightIn, RightIn2, StarWrap, StarWrap2 } from '../style/styles'
import { Campcar } from '../../data/motordata';
import { Link } from 'react-router-dom';
import menu from "../../assets/motor-img/clarity_grid-view-solid.png"
import navmenu from "../../assets/ic_round-view-list (1).png"
// import Vmenu from './Vmenu';
// import AccordionUsage from './according copy';
import VMenu from './Vmenu';
// import ButtonHV from './btn';
import TemporaryDrawer from '../../filter/filterdrawer';
import HMenu from './HMenu';
import ButtonHV from './btn';

const ItemPAge = () => {
    
    
  const data = Campcar.maindata;
  const dataLength = data.length;

  console.log("data:", data.length);
  const [active, setActive] = useState(true)
    

  function handleVMenu() {
      setActive(false);
    }
    function handleHMenu(){
      setActive(true )
    }

    const [selectedLabel, setSelectedLabel] = useState([])

const handleCheckBoxChange = (labelName) => {
const isSelected = selectedLabel.includes(labelName)
setSelectedLabel(
  isSelected 
  ? selectedLabel.filter((itsName) => itsName !== labelName)
  : [...selectedLabel, labelName]
)
}

const filteredData = data.filter(
(item) => 
selectedLabel.length === 0 ||
selectedLabel.includes(item.car.company)||
selectedLabel.includes(item.car.license)||
selectedLabel.includes(item.car.people)||
selectedLabel.includes(item.car.location)
)
////////////////////////////


 console.log ("filtered data", filteredData)
   
  return (
    <Item24>
      
       <Item242>
       <LeftSearch>
            <TemporaryDrawer/>
        </LeftSearch>
           <ItemLeft>
           <p>Item</p>
           <p style={{ color:" #006dab"}}>{filteredData.length}</p>
            </ItemLeft>

           <ItemRight>
            <RightIn>
            <p>Sort by</p>
            <INput227 type="text" placeholder='Select' />
            <INput227 style={{width:60, height: 30, paddingLeft:10}} type="text" placeholder='60' />
            </RightIn>
            {/* <ButtonHV/> */}
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
        


      {/* twice */}
        <Item242242>
      

           <ItemLeft2>

           <LeftSearch>
            <TemporaryDrawer/>
        </LeftSearch>
           
            <COlumnItemLeft2>
            <p>Item</p>
            <p style={{ color:" #006dab"}}>{filteredData.length}</p>
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
            {/* <ButtonHV/> */}
             {/* <BtnWrap2 $iconBtn>
                          <Button2 $iconBtn onClick={handleVMenu}>
                          <img src={menu} alt="menu-h" />
                          </Button2>
                        <Button $iconBtn onClick={handleHMenu}>
                        <img src={navmenu} alt="nv-menu" />
                        </Button>
            </BtnWrap2>  */}
                        
           </ItemRight2>

        </Item242242>
      
             
              {/* <HMenu/> */}

              <>{active ? <VMenu exportedData = {filteredData}/> :  <HMenu exportedData = {filteredData}/>}</>
    </Item24>
  )
}

export default ItemPAge;