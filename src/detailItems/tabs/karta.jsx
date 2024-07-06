import React from 'react'
import { ContactWrap, InputTwo, InputWrap, Karta, KartaRasm } from './tabstyle'
import { Inputs } from './inputs'
import { Flex2 } from './q$aStyle'
import HomeComponent from '../../popup/kakaomap'

const KartaNew = () => {
  return (
    <div>
         <ContactWrap>
            <Karta>
                <KartaRasm>
                <HomeComponent/>
                </KartaRasm>

                <InputWrap>
                <InputTwo> 
                <p>Phone Number </p>
                <h4>01097575501</h4>
                <h4>01097575501</h4>
                </InputTwo>
                <InputTwo>
                <p>E-mail:</p>
                <h4>logo.uz</h4>
                </InputTwo>
                </InputWrap>
            </Karta>

            <Flex2>
           <Inputs/>
            </Flex2>

        </ContactWrap>

    </div>
  )
}

export default KartaNew