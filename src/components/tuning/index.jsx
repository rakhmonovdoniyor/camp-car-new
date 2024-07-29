import React, { useState } from 'react'
import { BgWrap, BigConWrap,  Left, Right, TwoFlexWrap, TwoFlexWrap2 } from '../style/styles'
import { Link } from 'react-router-dom';
import ItemPAge from './Itemscar';
import AccordionUsage from './according copy';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import menu from "../../assets/motor-img/clarity_grid-view-solid.png"
import navmenu from "../../assets/ic_round-view-list (1).png"
import minicar from "../../assets/motor-img/Rectangle 705.png"
import { Allp, BrandItems, Colum, Hash, InputAll, Inputwrap,
   Inputwrap2, Line, MiniWrap, Minip, Threephoto, 
   TwoButton, TwoButton1 } from '../motor/accordstyle';
   import { Checkbox, FormControlLabel } from '@mui/material';
// import { CheckBox } from '@mui/icons-material';
import {  Btn2, BtnWrap, BtnWrap2, Button,
   Button2, COlumnItemLeft, COlumnItemLeft2, CamperWrap,
    Camperh5, Camperh6, INput227, INput227227, Item24, Item242,
     Item242242, ItemLeft, ItemLeft2, ItemRight, ItemRight2, 
     Items24, LeftSearch, RightIn, RightIn2, StarWrap, StarWrap2 } from '../style/styles'
import VMenu from './Vmenu';
import HMenu from './HMenu';
import TemporaryDrawer from '../../filter/filterdrawer';
import VMenu2 from './newVMneu';
import { TuningCampcar } from '../../data/datatuning';

const TuningPage = () => {

  const data = TuningCampcar.maindata;
  const dataLength = data.length;
  console.log("data:", data.length);

  const [active, setActive] = useState(true)
    

  function handleVMenu() {
      setActive(true);
    }
    function handleHMenu(){
      setActive(false )
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
const [showFilteredCompany, setShowFilteredCompany] = useState(false)

 console.log ("filtered data", filteredData)


  return (
    <BigConWrap>
     
       <BgWrap $tuning >
         <h3> Home / Tuning</h3> <br /> <br />
           <h2>Our ranges</h2> <br /> <br />
           <h1>Tuning</h1> <br /> <br />
         </BgWrap>
      
   
    
        <TwoFlexWrap>
    
          <Left>
             {/* <AccordionUsage/> */}
           
      <Colum>
      <Inputwrap>

<Hash>Cost of car</Hash> 
<Line></Line> <br /> <br />


<Inputwrap2>

<div>
<p>from</p>
<input  type="text" />
</div>
<p></p>

<div>
<p>to</p>
<input type="text" />
</div>


 </Inputwrap2>

  </Inputwrap>

  <Accordion defaultExpanded= {true} style={{boxShadow: 'none', borderBottom: 'none'}} >
      
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
       
      >
        Brand
      </AccordionSummary>
      <AccordionDetails>
      <Line></Line>
          <BrandItems style={{paddingTop: 50}}>
          <FormControlLabel control={<Checkbox />} label="르벤투스S+" onChange={() => handleCheckBoxChange("르벤투스S+")}/>
          </BrandItems>

          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="르벤투스680S" onChange={() => handleCheckBoxChange("르벤투스680S")}/>
          </BrandItems>

          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="르벤투스680" onChange={() => handleCheckBoxChange("르벤투스680")}/>

          </BrandItems>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded= {true} style={{boxShadow: 'none', borderBottom: 'none'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
      Company
      </AccordionSummary>
      <AccordionDetails>
      <Line></Line>
          <BrandItems style={{paddingTop: 50 }}>
           <FormControlLabel control={<Checkbox />} label="다온티앤티" onChange={() => handleCheckBoxChange("다온티앤티")}/>                                     
          </BrandItems>
          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="제일모빌"  onChange={() => handleCheckBoxChange("제일모빌")}/>
          </BrandItems>
          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="스타모빌" onChange={() => handleCheckBoxChange("스타모빌")}/>
          </BrandItems>
          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="영남캠핑카" onChange={() => handleCheckBoxChange("영남캠핑카")}/>
          </BrandItems>
          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="한울캠핑카" onChange={() => handleCheckBoxChange("한울캠핑카")}/>
          </BrandItems>
          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="훼미리캠핑카" onChange={() => handleCheckBoxChange("훼미리캠핑카")}/>
          </BrandItems>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded= {true} style={{boxShadow: 'none', borderBottom: 'none'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
      License type
      </AccordionSummary>
      <AccordionDetails>
      <Line></Line>
          <BrandItems style={{paddingTop: 50}}>
          <FormControlLabel control={<Checkbox />} label="Class C License" onChange={() => handleCheckBoxChange("Class C License")}/>
          </BrandItems>

          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="Class B License" onChange={() => handleCheckBoxChange("Class B License")}/>
          </BrandItems>

          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="Class D License" onChange={() => handleCheckBoxChange("Class D License")}/>

          </BrandItems>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded= {true} style={{boxShadow: 'none', borderBottom: 'none'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
      People
      </AccordionSummary>

      <AccordionDetails>
      <Line></Line>
          <BrandItems  style={{paddingTop: 50}}>
          <FormControlLabel control={<Checkbox />} label="7" onChange={() => handleCheckBoxChange("7")}/>
          </BrandItems>
          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="6" onChange={() => handleCheckBoxChange("6")}/>
          </BrandItems>

          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="5" onChange={() => handleCheckBoxChange("5")}/>
          </BrandItems>

          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="4" onChange={() => handleCheckBoxChange("4")}/>
          </BrandItems>

          
      </AccordionDetails>       
    </Accordion>

    <Accordion defaultExpanded= {true} style={{boxShadow: 'none', borderBottom: 'none'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
      Location
      </AccordionSummary>
      <AccordionDetails>
      <Line></Line>
          <BrandItems style={{paddingTop: 50}}>
          <FormControlLabel control={<Checkbox />} label="Seoul" onChange={() => handleCheckBoxChange("Seoul")}/>
          </BrandItems>

          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="Daegu" onChange={() => handleCheckBoxChange("Daegu")}/>
          </BrandItems>

          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="Pusan" onChange={() => handleCheckBoxChange("Pusan")}/>

          </BrandItems>
          <BrandItems>
          <FormControlLabel control={<Checkbox />} label="Jeju" onChange={() => handleCheckBoxChange("Jeju")}/>

          </BrandItems>
      </AccordionDetails>

    </Accordion >
    
    <Accordion defaultExpanded= {true}  style={{boxShadow: 'none', borderBottom: 'none'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        Accordion Actions
      </AccordionSummary>
      <AccordionDetails>

      <TwoButton>
          <TwoButton1>Cancel</TwoButton1>
          <TwoButton1 $btn2>Serach</TwoButton1 >
      </TwoButton>

      <MiniWrap>
          <Minip>
          <p>Compare</p>
          </Minip>
          <Threephoto>
            
          <img src={minicar} alt="" />
          <img src={minicar} alt="" />
          <img src={minicar} alt="" />
          </Threephoto>

      </MiniWrap>
      </AccordionDetails>
     
    </Accordion>

      </Colum>


          </Left>

          <Right>
              {/* <ItemPAge/>  */}
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
                          <Button2 $iconBtn onClick={handleHMenu}>
                          <img src={menu} alt="menu-h" />
                          </Button2>
                        <Button $iconBtn onClick={handleVMenu}>
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

              <>{active ? <HMenu exportedData = {filteredData}/> :  <VMenu2 exportedData = {filteredData}/>}</>
     </Item24>
          </Right>

        </TwoFlexWrap>
     
    

    </BigConWrap>
  )
}

export default TuningPage