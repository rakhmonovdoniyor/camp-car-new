import React from 'react';
import Popup from 'reactjs-popup';
import { Input1, Inputwrap, REgh1, RegWrapper, BtnReg, Flex, Or, ThreeIcon, Logos } from './style';
import { Checkbox } from './style';
import { Link } from 'react-router-dom';
// import { Input } from '@mui/material';
import img2 from "../assets/bx_bxs-user.png"
import naver1 from "../assets/sign/image.png"

export const Login = () => (
  <Popup
    trigger={<button className="button"> <img src={img2} alt="logo-sign"sx={{backgroundColor: 'transparent', width: 50, height: 50 , color: 'white' , cursor: 'pointer'}} /> </button>}
    modal
    nested
    defaultExpanded= {false}
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}
        
        >
          &times;
        </button>
        
        <div className="content">
          
          <RegWrapper>
            <REgh1>
              <h1>Sign In</h1>
            </REgh1>


            <Inputwrap>

            
            <div>
              <h3>Email</h3> <br /> 
              <Input1 type="email" placeholder='Your Email'/>  
            </div>

            <div>
              <h3>Password</h3><br />
              <Input1 type="password" placeholder='Your Password' />
            </div>

            <Checkbox>
                <Flex>
                <input type="checkbox" />
                <p>Keep me logged in</p>
                </Flex>
                <div>
                    <p style={{cursor: 'pointer'}}>Forgot your password?</p>
                </div>
              

            </Checkbox>

            <BtnReg>SIGN IN</BtnReg>

            <Or><h3>OR</h3></Or>

            <ThreeIcon>
             <img src={naver1} alt="ddf" style={{width: 230, height: 60 , cursor: 'pointer'}} />
            </ThreeIcon>

            <div>
            <Link to="createAccount" style={{textDecoration: "none"}}>
                <BtnReg $create>Create Account</BtnReg>
                </Link>
            </div>

            </Inputwrap>

          </RegWrapper>
          
        </div>
        <div className="actions">
          
          
        </div>
      </div>
    )}
  </Popup>
);