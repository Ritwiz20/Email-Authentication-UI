import React from 'react'
import './Verify.css';
import {FaAngleRight} from 'react-icons/fa';

const Verify = () => {
  return (
    <>
   <div className="main">
   <div className="wrapper">

    <div className="svg">
      <img src="/images/email1.png" alt="send_img" />
    </div>

    <div className="para">
      <h3>Your email has not been verified.</h3>
      <p> Send a verification code to #%&w@g***.com.</p>
    </div>

    <div className="verification">
      <button className='ver_btn'> Send verification email </button>
    </div>
 
    <div className='end'>
      <p> Skip for now </p>
      <FaAngleRight className = 'arrow1'color={'#0f84cc'} size={25}/>
     
    </div>
    
   </div>
   </div>
   </>
  )
}

export default Verify
