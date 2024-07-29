import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img2 from "../assets/navbar-images/acoount.png"
import naver1 from "../assets/navbar-images/image.png"
import ClearIcon from "@mui/icons-material/Clear";
import { Input1, Inputwrap, REgh1, RegWrapper, BtnReg, Flex, Or, ThreeIcon, Logos, Wrap } from './style';
import { Checkbox } from './style';
import { Link, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: 5 ,
  // boxShadow: 24,
  p: 4,
};

export const  TransitionsModal= () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
    console.log("clicked");

  }
  return (
    <div>
      <Button onClick={handleOpen}><img src={img2} alt="logo-sign"sx={{backgroundColor: 'transparent', width: 50, height: 50 , color: 'white' , cursor: 'pointer'}} /></Button>
      <Modal 
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition = {false}
        slots={{ backdrop: Backdrop }}
        // closeAfterTransition ={false}
        slotProps={{
          backdrop: {
            timeout: 500,

          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <RegWrapper $sign>
            <REgh1>
              <h1>Sign In</h1>
              <ClearIcon onClick={handleClose} sx={{cursor: "pointer"}}/>
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
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal;