import React from 'react';
import Popup from 'reactjs-popup';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Popimg } from '../homepage/style';


export const PopUp = () => (
    
  <Popup arrowStyle={{borderRadius: 20}} 
    trigger={<Popimg className="button"> <PlayCircleOutlineIcon sx={{backgroundColor: 'transparent', width: 50, height: 50 , color: 'whitesmoke' , cursor: 'pointer', borderRadius: '10px'}}/>  </Popimg>}
    modal
    nested 
  >
    {close => (
      <div className="modal" style={{borderRadius: '10px'}}>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Winnebago Navion</div>
        <div className="content">
        <iframe style={{borderRadius: 20}} width="790" height="360" src="https://www.youtube.com/embed/NcCOnIRJ328?si=BGMOVDGz75jkCD79" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="actions">
         
          {/* <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button> */}
        </div>
      </div>
    )}
  </Popup>
);

export default PopUp;