import React from 'react'
import { Box1,  BoxWRapper,  Flex1,  Flex2,  Line707,  } from './q$aStyle';
import { Smallp } from './tabstyle';
import { Inputs } from './inputs';

const Faq1 = () => {
  return (
    <div>
         <BoxWRapper>
            <Box1>
                <Smallp >Name</Smallp >
                <h3>Lorem ipsum dolor sit amet , adipisicing elit, reiciendis!</h3>
                <Line707/>
                <Smallp>Name</Smallp>
                <h3>Lorem ipsum dolor sit amet , adipisicing elit, reiciendis!</h3>
                <Line707/>
                <Smallp>Name</Smallp>
                <h3>Lorem ipsum dolor sit amet , adipisicing elit, reiciendis!</h3>
                <Line707/>
                <Smallp>Name</Smallp>
                <h3>Lorem ipsum dolor sit amet , adipisicing elit, reiciendis!</h3>
                <Line707/>
                <Smallp>Name</Smallp>
                <h3>Lorem ipsum dolor sit amet , adipisicing elit, reiciendis!</h3>
                <Line707/>
                
            </Box1>
            <Flex2>
            <Inputs/>
            </Flex2>
           
        </BoxWRapper>
    </div>
  )
}

export default Faq1