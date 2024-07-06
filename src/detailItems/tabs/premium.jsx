import React from 'react'
import { Campcar } from '../../data/motordata';
import { CenterDiv, Column1, Con4, Container, EndDiv,
   FarLIne, First, Line1, Smallp } from './tabstyle';
import { useParams } from 'react-router-dom';
import MultipleSelect from './input';
import Premium2 from './tabcolumn';

const Premium1 = () => {
    const data = Campcar.maindata.slice(0,5);
  const dataLength = data.length;
  console.log("data:", data.length);

  const { id } = useParams() ;
  const resultdata = Campcar.maindata.find(
    (value) => value.id === parseInt(id));
    console.log(resultdata);
 
  return (
    <div>
        <div>
            {
                data.map((value, key) => {
                    return(
                     
                       <Container key={key}>

                         <First>
                            <img src={value.car.photo} alt="no" style={{width:150, height: 80}} />
                         </First>
                        
                         <CenterDiv>
                         
                            <Column1>
                            <h3>{value.car.name}</h3>
                            <p>{value.car.type}</p>
                            <p>{value.car.license}</p>
                            </Column1>

                            <EndDiv>
                              <Line1><Smallp>ID:</Smallp> <p>{resultdata.id}</p> </Line1>
                              <Line1><Smallp>Date:  </Smallp> <p> {resultdata.car.date}</p></Line1>
                              <Line1><Smallp>Viewed:  </Smallp> <p> {resultdata.car.view}</p></Line1>
                            </EndDiv>

                         </CenterDiv>

                      
                        
                       </Container>

                  
                       
                    )
                })
            }
        </div>
    </div>
  )
}

export default Premium1;