import React from 'react';
import Popup from 'reactjs-popup';
import { Input1, Inputwrap, REgh1, RegWrapper, BtnReg, Wrapreg } from './style';
import { Checkbox } from './style';
import { Paper } from '@mui/material';
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';
// import { Input } from '@mui/material';

export default  function Register()  {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
    console.log("clicked");
  }
  return (
    <div style={{width: '100%', }} >
        <Wrapreg className="content">
          <Paper>
          <RegWrapper >
            <REgh1>
              <h1>Registrate</h1>
              <ClearIcon onClick={handleBack} sx={{cursor: "pointer"}}/>
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

            <div>
              <h3>Repeat Password</h3> <br />
              <Input1 type="password"placeholder='Repeat Password' />
            </div>

            <>
              <div style={{display: 'flex'}}>
              <input type='checkbox' style={{padding: '20px', border: '1px solid blue', color: 'blue'}}/>
              <p>Keep me logged in</p>
              </div>
              
            </>

            <BtnReg>REGISTRATE</BtnReg>

            </Inputwrap>

          </RegWrapper>
          </Paper>
        </Wrapreg>
        </div>
 
      );
    
  }