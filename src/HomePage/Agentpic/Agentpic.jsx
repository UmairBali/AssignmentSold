import React from 'react'
import './Agentpic.css'
import Button from 'react-bootstrap/Button';
import image from "./newagent.png"


function Agentpic() {
  return (
    <div>
        <div className="row agentpicrow">
            <div className="col-lg-6 col-12">
            <h3>Question About Selling
            </h3>
            <h4 className='comfree'>commission-free?</h4>
            <h4 className='help'>We can help!</h4>
            <Button className='callus' variant="primary">Call Us</Button>{' '} 
            </div>
            <div className="col-lg-6 col-12 agnt">
                <img className='agentshb' src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Agentpic