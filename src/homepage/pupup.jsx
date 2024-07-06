import React from 'react'
import { Cen5,  Popimg, Popuph1, WrapPopimg } from './style'
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PopUp from '../popup/inex';

export const Pop = () => {
  return (
    <Cen5>
        <Popuph1>
            <h1>Videos</h1>
        </Popuph1>
        <WrapPopimg>

      
            <Popimg $pop1 > <PopUp></PopUp> </Popimg>
            <Popimg $pop2 > <PopUp></PopUp> </Popimg>
            <Popimg $pop3 > <PopUp></PopUp> </Popimg>
            <Popimg $pop4 > <PopUp></PopUp> </Popimg>
            <Popimg $pop5 > <PopUp></PopUp> </Popimg>
            <Popimg $pop6 > <PopUp></PopUp> </Popimg>
            <Popimg $pop7 > <PopUp></PopUp> </Popimg>
            <Popimg $pop8 > <PopUp></PopUp> </Popimg>
        
        </WrapPopimg>


    </Cen5>
  )
}
