import React from 'react'
import "./All.css";
export default function Show() {
  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-lg-12 ii justifycentre">
        We can take care, of everything.
        </div>
        {/* div for second line */}
        <div className="row hi  mt-2 justifycentre">
        Your Schedule matters. We'll work around for you for the ideal showing times
        </div>
        {/* div for third line */}
        <div className="row hii mt-2">
        You can select a lockbox solution that fits both agents and your showing needs.
        </div>
        {/* div for fourth line */}
        <div className='row hiii mt-2'>
        Your online tool will keep you up-to-date with real-time requests.
        </div>
        {/* div for fifth line */}
        <div className="row hiii mt-2">
        Want to visit that special property you found online? Our experts would be happy to help
        </div>
        {/* div of readmore button */}
        <div className="row mt-3 hmm">
            <button className='btn gud' type="button ">Learn  More</button>
        </div>
      </div>
    </div>
  )
}
