// import React from 'react'
import "./Footer.css"
import Button from '@mui/material/Button';
export default function Footer() {
  return (
    <div>
        <div className="row sellpro mt-5">
            <div className="col-lg-6 aligncenter justifycenter">
       <h3 className="dyw">Do You Want to sell your property?</h3> 
            </div>
            <div className="col-lg-6 btnlist">
            <Button className="wanttosell" variant="contained">List Your Property now.</Button>
            </div>
        </div>
        <div className="container mt-5">
 <div className="row">
          <div className="col-lg-4 "> <p className="hdingtext">EXPLORE ASSIGNMENTSOLD.CA </p> 
          <div className="row thisis">
            <p>this is </p>
            <p>this is </p>
            <p>this is </p>
            <p>this is </p>
          </div>
          </div>

          <div className="col-lg-3 hdingtext">SELLING A PROPERTY</div>
          <div className="col-lg-3 hdingtext">BUYING A PROPERTY</div>
          <div className="col-lg-2 hdingtext">QUICK LINKS</div>
        </div>
        </div>
      </div>
    
  )
}
