import React from 'react'
import { Campcar } from '../../data/motordata';
import { CenterDiv, Column1, Con1, Con3, Container, EndDiv, FarLIne, First, Line1, Smallp } from './tabstyle';
import { useParams } from 'react-router-dom';
import MultipleSelect from './input';

const Premium2 = () => {
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
                     
                       <Con1 key={key}>
                         <div>
                            <img src={value.car.photo} alt="no" style={{width:350, height: 160}} />
                         </div>
                        
                         <div>
                         
                            <div>
                            <h3>{value.car.name}</h3>
                            <p>{value.car.type}</p>
                            <p style={{width: 350, paddingTop: 10, paddingBottom:10}}>{value.car.lorem}</p>
                            </div>

                            <Con3>
                              <Line1><Smallp>ID:</Smallp> <p>{resultdata.id}</p> </Line1>
                              <Line1><Smallp>Date:  </Smallp> <p> {resultdata.car.date}</p></Line1>
                              <Line1><Smallp>Viewed:  </Smallp> <p> {resultdata.car.view}</p></Line1>
                            </Con3>

                         </div>
                        
                       </Con1>
                      
                       
                    )
                })
            }
        </div>
    </div>
  )
}

export default Premium2;