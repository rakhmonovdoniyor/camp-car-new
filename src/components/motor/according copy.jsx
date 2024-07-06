import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Allp, BrandItems, Hash, InputAll, Inputwrap, Inputwrap2, Line, MiniWrap, Minip, Threephoto, TwoButton, TwoButton1 } from './accordstyle';
import minicar from "../../assets/motor-img/Rectangle 705.png"
import { Checkbox, FormControlLabel } from '@mui/material';
import { Campcar } from '../../data/motordata';
import SortButton from './sortfilter';


export default function AccordionUsage() {

  ///////////////////////////////
////sidebar

const [filterData, setFilterData] = React.useState("");
    const data = Campcar.maindata;
    // const length = data.length;
    const handleFilter = (e) => {
       const searchQuerry = e.target.value.toLowerCase();
        setFilterData(
          data.filter((campercar) =>
             campercar.car.name.toLocaleLowerCase().includes(searchQuerry)))
      
    
    };

    console.log(filterData);

//  const [selectedLabel, setSelectedLabel] = React.useState([])

//  const handleCheckBoxChange = (labelName) => {
//   const isSelected = selectedLabel.includes(labelName)
//   setSelectedLabel(
//     isSelected 
//     ? selectedLabel.filter((itsName) => itsName !== labelName)
//     : [...selectedLabel, labelName]
//   )
//  }

//  const filteredData = data.filter(
//   (item) => 
//     setFilterData.length === 0 ||
//   setFilterData.includes(item.car.name)||
//   setFilterData.includes(item.car.license)||
//   setFilterData.includes(item.car.people)||
//   setFilterData.includes(item.car.location)
//  )
////////////////////////////

  
  //  console.log ("filtered data", filteredData)


  return (
    <div>
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
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Knal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>escape</Allp>

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
            <BrandItems style={{paddingTop: 50}}>
             <FormControlLabel control={<Checkbox />} label="Wilderness Wheels+" onChange={() => handleFilter("Wilderness Wheels")}/>
                {/* <FormControlLabel control={<Checkbox />} label="제일모빌"  onChange={() => handleCheckBoxChange("제일모빌")}/>
                <FormControlLabel control={<Checkbox />} label="영남캠핑카"  onChange={() => handleCheckBoxChange("영남캠핑카")}/>
                <FormControlLabel control={<Checkbox />} label="영남캠핑카" onChange={() => handleCheckBoxChange("영남캠핑카")}/>
                <FormControlLabel control={<Checkbox />} label="한울캠핑카" onChange={() => handleCheckBoxChange("한울캠핑카")}/>
                <FormControlLabel control={<Checkbox />} label="훼미리캠핑카" onChange={() => handleCheckBoxChange("훼미리캠핑카")}/>
                <FormControlLabel control={<Checkbox />} label="에이스캠퍼" onChange={() => handleCheckBoxChange("에이스캠퍼")}/>
                <FormControlLabel control={<Checkbox />} label="월든모빌" onChange={() => handleCheckBoxChange("월든모빌")}/>
                <FormControlLabel control={<Checkbox />} label="위드원모터스" onChange={() => handleCheckBoxChange("위드원모터스")}/>
                <FormControlLabel control={<Checkbox />} label="미스터캠퍼" onChange={() => handleCheckBoxChange("미스터캠퍼")}/>
                <FormControlLabel control={<Checkbox />} label="드림캠핑카" onChange={() => handleCheckBoxChange("드림캠핑카")}/>
                <FormControlLabel control={<Checkbox />} label="모터홈코리아" onChange={() => handleCheckBoxChange("모터홈코리아")}/> */}
            </BrandItems>

            

            <BrandItems>
             <FormControlLabel control={<Checkbox />} label="제일모빌"  onChange={() => handleFilter("Wilderness Wheels+")}/>

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
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>1 year</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>2 year</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>1.5 year</Allp>

            </BrandItems>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded= {true} style={{boxShadow: 'none', borderBottom: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Number of travelers
        </AccordionSummary>
        <AccordionDetails>
        <Line></Line>
            <BrandItems style={{paddingTop: 50}}>
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>2</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>3-4</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>5+</Allp>

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
            {/* <FormControlLabel control={<Checkbox />} label="수도권" onChange={() => handleCheckBoxChange("수도권")}/> */}
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Daegu</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Pusan</Allp>

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
     

    </div>
  );
}
