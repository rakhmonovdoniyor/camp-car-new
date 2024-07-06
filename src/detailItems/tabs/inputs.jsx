import React, { useRef } from 'react'
import { BTN, BTNWrap, BigInput, InputContainer, InputWrapCon, SendBtn, TExtWrap } from './q$aStyle'
import  emailjs  from '@emailjs/browser';

export const Inputs = () => {

  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mxq3wms', 'template_hfzh6ba', form.current, {
        publicKey: 'PZH5pIiKioMb9vkwL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
  };
  return (
    <BigInput>
        <InputContainer >
                <TExtWrap><h1>Send a question</h1>
                </TExtWrap>
                <InputWrapCon>
                <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                    <input   type="text"  placeholder ='Your name' />
                    
                    <label>Email</label>
                    <input   type="email" placeholder = 'Your email' />
                    
                    <label>Message</label>
                    <input style={{height: 120}}   type="text" placeholder='Your question'/>
                    <BTN> 
                      {/* <SendBtn type="submit" value="Send" /> */}
                      <SendBtn  type="submit" value="Send">Send</SendBtn>
                    </BTN>
                    
                   
                   </form>
                   <BTNWrap>
                    <button></button>
                    </BTNWrap> 
                </InputWrapCon>
                
            </InputContainer>

    </BigInput>
  )
}
