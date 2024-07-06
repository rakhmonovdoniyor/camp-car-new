import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Allp, BrandItems, Hash, InputAll, Inputwrap, Inputwrap2, Line, MiniWrap, Minip, Threephoto, TwoButton, TwoButton1 } from './accordstyle';
import minicar from "../../assets/motor-img/Rectangle 705.png"


export default function AccordionUsage() {
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
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>escape</Allp>
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
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>Seoul</Allp>
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
