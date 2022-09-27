import React from 'react'
import './Send.css';
import {FaAngleRight , FaPaperPlane} from 'react-icons/fa';

const Send = () => {
  return (
   <>
   <div className="main">
   <div className="wrapper1">
    
    <div className="svg_send">
      <FaPaperPlane size={100} color={'#1DA1F2'}/>
    </div>

    <div className="para1">
      <h3>An email has been sent to you.</h3>
      <p> Check the email that's associated with your account</p>
      <p> for the verification code.</p>
    </div>

    <div className="verification1">
      <p>Verification Code</p>
      <input type="text" className='ver_box' />
      <button className='ver_btn'> Verify </button>
    </div>

    <div className="ano_code">
    <p> Send me another code</p>
    </div>

    <div className='end1'>
      <p> Skip for now </p>
      <FaAngleRight className = 'arrow'color={'#0f84cc'} size={25}/>
    </div>
   </div>
   </div>
   </>
  )
}

export default Send

