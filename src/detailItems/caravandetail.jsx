import React from 'react'
import { BgWrap} from '../components/style/styles'
import { BigCon, Carphoto, Container, Data, Data1, Data2, DetailCom , DataWrapperbox, Linestyle, CarCost, ItemOneLine , TextStylep, TextStylep1, ComfortText, ComfortPhoto, ComWrapper, PWRap, DetailButton, BTnWrap, BigConWrap, CmfPhoto2} from './style'
import { useParams } from 'react-router-dom'
import { Campcar, CaravanCampcar } from '../data/datacaravan'
import { Container2, Container3, Container4, Container5, Container6, Container7, Wrap, Wrappp } from './caravanstyle'
import { Line } from '../components/motor/accordstyle'
// import BasicTabs from './tabs/tab'
// import { Center } from '../components/campingplace/style'

export const DetailCaravan = () => {
  const { id } = useParams() ;
  const resultdata = CaravanCampcar.maindata.find(
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

        <Wrappp>


        <BigConWrap>
            <Wrappp>

            
            <Container>
                <Container2>
                    <img src={resultdata.car.photo} alt="" />
                </Container2>

                <Container3>
                    <Container4>
                        <h1>{resultdata.car.name}</h1> <h1>{resultdata.car.cost}</h1>
                        {/* <p>Lorem</p> */}
                    </Container4>
                    <Line/>
                    <Container4>
                        <p>Company</p> <p>{resultdata.car.company}</p>
                    </Container4>
                    <Container4>
                        <p>People</p> <p>{resultdata.car.people}</p>
                    </Container4>
                    <Container4>
                        <p>Licence type</p> <p>{resultdata.car.license}</p>
                    </Container4>

                    <div>

                    </div>
                </Container3>
            </Container>
            </Wrappp>

            <Wrappp>
            <Container5>
                <Container6>
                    <p style={{padding: 100}}>{resultdata.car.desc.comfort1}</p>
                </Container6>
                <Container7>
                    <img style={{width: 655}} src= {resultdata.car.desc.cmfphoto} alt="" />
                </Container7>
            </Container5>
            </Wrappp>
            <Container5>
                
                <Container6>
                    <img style={{width: 655}} src= {resultdata.car.desc.cmfphoto} alt="" />
                    
                </Container6>
                <Container7>
                    <p style={{padding: 100}}>{resultdata.car.desc.comfort1}</p>
                </Container7>
            </Container5>
            <Container5>
                <Container6>
                    <p style={{padding: 100}}>{resultdata.car.desc.comfort1}</p>
                </Container6>
                <Container7>
                    <img style={{width: 655}} src= {resultdata.car.desc.cmfphoto} alt="" />
                </Container7>
            </Container5>
            <Container5>
                <Container6>
                    <img style={{width: 655}} src= {resultdata.car.desc.cmfphoto} alt="" />
                    
                </Container6>
                <Container7>
                    <p style={{padding: 100}}>{resultdata.car.desc.comfort1}</p>
                </Container7>
            </Container5>
            <Container5>
                <Container6>
                    <p style={{padding: 50}}>{resultdata.car.desc.comfort1}</p>
                    <BTnWrap>
                    <DetailButton $blue >ADD TO CART</DetailButton>
                    <DetailButton $blue >COMPARE</DetailButton>
                    </BTnWrap>
                </Container6>
                <Container7>
                    <img style={{width: 655}} src= {resultdata.car.desc.cmfphoto} alt="" />
                </Container7>
            </Container5>
           
       
        </BigConWrap>

        </Wrappp>
        

        
    </div>
  )
}
