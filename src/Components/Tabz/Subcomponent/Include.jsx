import React from 'react'
import "./All.css";
export default function Include() {
  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-lg-12 ii justifycentre">
        Everything an Agent can do...And More.!
        </div>
        {/* div for second line */}
        <div className="row hi  mt-2 justifycentre">
      You can experience the benefits of being on REALTOR.CA (Provided by PG Direct REALITY LTD.)
        </div>
        {/* div for third line */}
        <div className="row hii mt-2">
     Professional Signage,Photos,Virtual tours and Social Media Postings.
        </div>
        {/* div for fourth line */}
        <div className='row hiii mt-2'>
   Direct Access to PG Direct Reality LTD. services to help you set you price, manage offers,negociations and even Showings
        </div>
        {/* div for fifth line */}
        <div className="row hiii mt-2">
Want cash back when Buying your next property
        </div>
        {/* div of readmore button */}
        <div className="row mt-3 hmm">
            <button className='btn gud' type="button ">Learn  More</button>
        </div>
      </div>
    </div>
  )
}
