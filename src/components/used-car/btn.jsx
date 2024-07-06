import React, { useState } from 'react'
import ItemPAge from './Itemscar';
import VMenu from './Vmenu';
import { BtnWrap } from '../style/styles';
import { Button } from './vmenuStyle';
import menu from "../../assets/motor-img/clarity_grid-view-solid.png"
import navmenu from "../../assets/motor-img/ic_round-view-list.png"

const ButtonHV = () => {
    const [active, setActive] = useState(false)
    

    function handleVMenu() {
        setActive(false);
      }
      function handleHMenu(){
        setActive(true )
      }
  return (
    <div>
                         <BtnWrap $iconBtn>
                          <Button $iconBtn onClick={handleVMenu}>
                          <img src={menu} alt="menu-h" />
                          </Button>
                        <Button $iconBtn onClick={handleHMenu}>
                        <img src={navmenu} alt="nv-menu" />
                        </Button>
                        </BtnWrap>
                        <div>
                        <>{active ? <VMenu/> :  <ItemPAge/>}</>
                        </div>
    </div>
    
  )
}

export default ButtonHV