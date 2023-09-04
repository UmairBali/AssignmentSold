import React from 'react'
import "./All.css";
export default function Costing() {
  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-lg-12 ii justifycentre">
            Custom Priceing. Avoid Unfair Commisions
        </div>
        {/* div for second line */}
        <div className="row hi  mt-2 justifycentre">
            Customized  Packeges tailored to your specific requirements
        </div>
        {/* div for third line */}
        <div className="row hii mt-2">
            Your custom marketing plan put's you in the driver seat and is fully upgradeable anytime
        </div>
        {/* div for fourth line */}
        <div className='row hiii mt-2'>
            You can save thousands in unfair commisions
        </div>
        {/* div for fifth line */}
        <div className="row hiii mt-2">
            How much can you save?
        </div>
        {/* div of readmore button */}
        <div className="row mt-3 hmm">
            <button className='btn gud' type="button ">Read More</button>
        </div>
      </div>
    </div>
  )
}
