import React from 'react'
import { BgWrap} from '../components/style/styles'
import { BigCon, Carphoto, Container, Data, Data1, Data2,
   DetailCom , DataWrapperbox, Linestyle, CarCost, ItemOneLine ,
    TextStylep, TextStylep1, ComfortText, ComfortPhoto,
     ComWrapper, PWRap, DetailButton, BTnWrap, BigConWrap,
      CmfPhoto2, Basictabs2responsive} from './style'
import { useParams } from 'react-router-dom'
import { Campcar } from '../data/motordata'
import BasicTabs from './tabs/tab'
import LabTabs from './tabbbb'
import BasicTabs2 from './tabbbb'
// import BasicTabs from './tabs/tab'
// import { Center } from '../components/campingplace/style'

export const Detail = () => {
  const { id } = useParams() ;
  const resultdata = Campcar.maindata.find(
  (value) => value.id === parseInt(id));
  console.log(resultdata);
  // console.log(resultdata.id)
  return (
    <div >
      
        <BgWrap $home >
        
          <h1 >{resultdata.car.name}</h1> 
          <DetailCom>
            <BTnWrap>
          <DetailButton>ADD TO CART</DetailButton>
          <DetailButton>COMPARE</DetailButton>
          </BTnWrap>
          </DetailCom>
          
        </BgWrap>

        <BigConWrap>

        <BigCon>
        <Container>

        
        <Carphoto>
        <img  src= {resultdata.car.photo || "no data"}  alt="id1" />
        </Carphoto>

        <Data>

          <DataWrapperbox>
           <Data1>
            <h1> {resultdata.car.name  || "no data"}</h1>
               <CarCost $cost> {resultdata.car.cost}</CarCost>
           </Data1>

           <Linestyle/>

           <Data2>
            <ItemOneLine><TextStylep1>Company </TextStylep1> <TextStylep> {resultdata.car.company  || "no data"}</TextStylep></ItemOneLine>
            <ItemOneLine><TextStylep1>People </TextStylep1> <TextStylep> {resultdata.car.people  || "no data"} </TextStylep></ItemOneLine>
            <ItemOneLine><TextStylep1>License type </TextStylep1> <TextStylep> {resultdata.car.license  || "no data"} </TextStylep></ItemOneLine>
                </Data2>
          </DataWrapperbox>

        </Data>
        </Container>
        
        
        <ComWrapper>
          <ComfortText>
            <h1>Comfort</h1>
            <PWRap>
            <p>{resultdata.car.desc.comfort1}</p>
            </PWRap>           
          </ComfortText>
          <CmfPhoto2><img src={resultdata.car.desc.cmfphoto2  || "no data"} /></CmfPhoto2>
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto  || "no data"} alt="idphoto" /></ComfortPhoto>
          </ComWrapper>


          <ComWrapper>
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto2  || "no data"} alt="idphoto" /></ComfortPhoto>
         
          <ComfortText>
            <h1>Tidying away is child’s play!</h1>
            <PWRap>
            <p>{resultdata.car.desc.comfort2  || "no data"}</p>
            </PWRap>       
          </ComfortText>
          <CmfPhoto2><img src={resultdata.car.desc.cmfphoto2} alt="" /></CmfPhoto2>
          </ComWrapper>

          <ComWrapper>
          <ComfortText>
            <h1>Ventilated , Lit up</h1>
            <PWRap>
            <p>{resultdata.car.desc.comfort3  || "no data"}</p>
            </PWRap>
           
          </ComfortText>
          <CmfPhoto2><img src={resultdata.car.desc.cmfphoto3  || "no data"} /></CmfPhoto2>
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto3  || "no data"} alt="idphoto" /></ComfortPhoto>
          </ComWrapper>


          <ComWrapper>
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto4  || "no data"} alt="idphoto" /></ComfortPhoto>
          <ComfortText>
            <h1>Easy access</h1>
            <PWRap>
            <p>{resultdata.car.desc.doors  || "no data"}</p>
            </PWRap>        
          </ComfortText>
          <CmfPhoto2><img src={resultdata.car.desc.cmfphoto4  || "no data"} /></CmfPhoto2>
          </ComWrapper>


          <ComWrapper>
          <ComfortText>
            <h1>Heating driving</h1>
            <PWRap>
            <p >{resultdata.car.desc.comfort1 || "no data"}</p>
            </PWRap>
            <BTnWrap>
            <DetailButton $blue>ADD TO CART</DetailButton>
            <DetailButton $blue>COMPARE</DetailButton>
            </BTnWrap>
            
            
           
          </ComfortText>
          <ComfortPhoto><img src={resultdata.car.desc.heatphoto} alt="idphoto" /></ComfortPhoto>
          </ComWrapper>


        {/* <BasicTabs/> */}
        <Basictabs2responsive>
        <BasicTabs2/>
        </Basictabs2responsive>
       
        </BigCon>
        </BigConWrap>

       
    </div>
  )
}
