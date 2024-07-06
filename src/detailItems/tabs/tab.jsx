// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import yarimta from "../../assets/camp id/yarimta.png"
// import map from "../../assets/camp id/Screenshot_1 1.png"
// import { Campcar } from '../../data/motordata';
// import { useParams } from 'react-router-dom';

// import { CenterDiv, First , Container, EndDiv, Column1, FarLIne
//  , Smallp, Line1, Premium, Input, TwoWrap, ContactWrap, Karta, 
//  KartaRasm, InputTwo, InputWrap, BtnHover, PremInput, Prem1,
//   Rewiev,
//   Prem2} from './tabstyle';
// import AccordionUsage from './FAQ';
// import { Box1,  BoxWRapper,  Line707,  } from './q$aStyle';
// import { Inputs } from './inputs';
// import MultipleSelect from './input';
// import HomeComponent from '../../popup/kakaomap';
// // import Premium from './premium';
// import Premium1 from './premium';
// import Premium2 from './tabcolumn';

// const data = Campcar.maindata.slice(0,6);
//   const dataLength = data.length;
//   console.log("data:", data.length);

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;


//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };


//   const { id } = useParams() ;
//   // console.log(Campcar);
//   // console.log(parseInt (id));
//   // const resultdata = Campcar.maindata(id) === parseInt(id)  ;
//   const resultdata = Campcar.maindata.slice(0, 6).find(
//   (value) => value.id === parseInt(id));
//   console.log(resultdata);
// //   const data = Campcar.maindata;
// //   const dataLength = data.length;
// //   console.log("data:" , data);
//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
       
//          <Tab label="Item review" {...a11yProps(0)} />
//           <Tab label="Q&A" {...a11yProps(1)} /> 
//           <Tab label="FAQ" {...a11yProps(2)} />
//           <Tab label="Contact" {...a11yProps(3)} />
         
//         </Tabs>
//       </Box>

//       <CustomTabPanel value={value} index={0}>
        
//       <Rewiev>
//         <PremInput>
//         <First $prem ><p>Premium review</p>  <h2 style={{ color:" #006dab", paddingRight: "650px"}}>{dataLength}</h2 >
//         </First>
        
//         <Column1>
//             <MultipleSelect/>
//         </Column1>         
//         </PremInput>
//         </Rewiev>

//       {/* <Container>
//       <First $prem ><p>Premium review</p>  <h2 style={{ color:" #006dab", paddingRight: "650px"}}>{dataLength}</h2 >
//       </First>
//             <CenterDiv>
            
//             <EndDiv>
//             <MultipleSelect/>
           
//             </EndDiv>
//             </CenterDiv>
      
           
//         </Container> */}

//         <Prem1>
//         <Premium1/>
//         </Prem1>
        
//         <Prem2>
//         <Premium2/>
//         </Prem2>
      
        
//         {/* <Container>
//             <Premium1/>

//         </Container> */}
//       {/* <Container>


                
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID:  </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date:  </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed:  </Smallp> <p> {resultdata.car.view}</p></Line1>
                
                
                
                
//             </EndDiv>
//             </CenterDiv>
//         </Container>
//         <FarLIne/>
//         <Container>
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID: </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date: </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed: </Smallp> <p> {resultdata.car.view}</p></Line1>  
//             </EndDiv>
//             </CenterDiv>
//         </Container>
//         <FarLIne/>
//         <Container>
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID: </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date: </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed: </Smallp> <p> {resultdata.car.view}</p></Line1>  
//             </EndDiv>
//             </CenterDiv>
//         </Container>
//         <FarLIne/>
//         <Container>
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID: </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date: </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed: </Smallp> <p> {resultdata.car.view}</p></Line1>  
//             </EndDiv>
//             </CenterDiv>
//         </Container>
//         <FarLIne/>
//         <Container>
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID: </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date: </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed: </Smallp> <p> {resultdata.car.view}</p></Line1>  
//             </EndDiv>
//             </CenterDiv>
//         </Container>
//         <FarLIne/>
//         <Container>
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID: </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date: </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed: </Smallp> <p> {resultdata.car.view}</p></Line1>  
//             </EndDiv>
//             </CenterDiv>
//         </Container>
//         <FarLIne/>
//         <Container>
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID: </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date: </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed: </Smallp> <p> {resultdata.car.view}</p></Line1>  
//             </EndDiv>
//             </CenterDiv>
//         </Container>
//         <FarLIne/>
//         <Container>
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID: </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date: </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed: </Smallp> <p> {resultdata.car.view}</p></Line1>  
//             </EndDiv>
//             </CenterDiv>
//         </Container>
//         <FarLIne/>
//         <Container>
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID: </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date: </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed: </Smallp> <p> {resultdata.car.view}</p></Line1>  
//             </EndDiv>
//             </CenterDiv>
//         </Container>
//         <FarLIne/>
//         <Container>
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID: </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date: </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed: </Smallp> <p> {resultdata.car.view}</p></Line1>  
//             </EndDiv>
//             </CenterDiv>
//         </Container>
//         <FarLIne/>
//         <Container>
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID: </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date: </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed: </Smallp> <p> {resultdata.car.view}</p></Line1>  
//             </EndDiv>
//             </CenterDiv>
//         </Container>
//         <FarLIne/>
//         <Container>
//             <First><img src={yarimta} alt="" /></First>

//             <CenterDiv>
//             <Column1>
//                 <h3>{resultdata.car.name}</h3>
//                 <p>{resultdata.car.type}</p> <br /> 
//                 <p>{resultdata.car.license}</p>
//             </Column1>
//             <EndDiv>
//                 <Line1><Smallp>ID: </Smallp> <p> {resultdata.id}</p></Line1>
//                 <Line1><Smallp>Date: </Smallp> <p> {resultdata.car.date}</p></Line1>
//                 <Line1><Smallp>Viewed: </Smallp> <p> {resultdata.car.view}</p></Line1>  
//             </EndDiv>
//             </CenterDiv>
//         </Container> */}
//       </CustomTabPanel>


//       <CustomTabPanel value={value} index={1}>
//         <BoxWRapper>
//             <Box1>
//                 <Smallp >Name</Smallp >
//                 <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit, reiciendis!</h3>
//                 <Line707/>
//                 <Smallp>Name</Smallp>
//                 <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit, reiciendis!</h3>
//                 <Line707/>
//                 <Smallp>Name</Smallp>
//                 <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit, reiciendis!</h3>
//                 <Line707/>
//                 <Smallp>Name</Smallp>
//                 <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit, reiciendis!</h3>
//                 <Line707/>
//                 <Smallp>Name</Smallp>
//                 <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit, reiciendis!</h3>
//                 <Line707/>
                
//             </Box1>
//            <Inputs/>
//         </BoxWRapper>
//       </CustomTabPanel>

//       <CustomTabPanel value={value} index={2}>
//       <AccordionUsage/>
      
//       </CustomTabPanel>

      
//       <CustomTabPanel value={value} index={3}>
       
//         <ContactWrap>
//             <Karta>
//                 <KartaRasm>
//                 <HomeComponent/>
//                 </KartaRasm>
//                 <InputWrap>
//                 <InputTwo type="text"/>
//                 <InputTwo type="text" />
//                 </InputWrap>
                    
                
               
//             </Karta>
//             <div>
//            <Inputs/>
//             </div>
//         </ContactWrap>

//       </CustomTabPanel>
//     </Box>
//   );
// }
