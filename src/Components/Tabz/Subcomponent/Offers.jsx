import React from 'react'
import "./All.css";
export default function Offers() {
  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-lg-12 ii justifycentre">
        Negotitate and close the deal.
        </div>
        {/* div for second line */}
        <div className="row hi  mt-2 justifycentre">
        Your offers, negotiations and the paperwork can be handled for you.
        </div>
        {/* div for third line */}
        <div className="row hii mt-2">
        You have the option to have buyers or agents send offers directly to your custom dashboard.
        </div>
        {/* div for fourth line */}
        <div className='row hiii mt-2'>
        You can access our experienced real estate lawyers to provide guidaance and advice, all the way to closing
        </div>
        {/* div for fifth line */}
        <div className="row hiii mt-2">
        Buyers can enjoy our handy OfferMaker.
        </div>
        {/* div of readmore button */}
        <div className="row mt-3 hmm">
            <button className='btn gud' type="button ">Learn  More</button>
        </div>
      </div>
    </div>
  )
}
