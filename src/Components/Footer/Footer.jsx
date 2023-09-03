import React from "react";
import "./Footer.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
export default function Footer() {
  return (
    <div className="container pt-5">
        {/* DIV for footer heading */}
      <div className="row hhh mb-2 p-4">
        <div className="col-lg-7 jjj mt-2">
          Do You Want To Sell Your Property?

        </div>
        <div className="col-lg-5 alignright p-1 mt-2">
            <button type="button " className="btn mmm">List Your Property Now</button>
          </div>
      </div>
      {/* div for explore and other stuff */}
<div className="row">
    {/* div for explore coloumn */}
    <div className="col-lg-3  mt-5">
        <h1 className="iiii">
        Explore Assignmentsold.ca
        <p className=" mt-4 ssss">
            <LocationOnIcon className=" uu p-1"/>
            Lorem ispum dolor sit amet
        </p>
        </h1>
        {/* phone icon */}
<p>
<CallIcon className="uu"/>
            Contact us: +1 (588) 986-5960 
</p>
{/* for message */}
<p>
<EmailIcon className="uu"/>
Contact@assignment sold.ca
</p>
{/* for icons */}
<p className="mt-2">
    <FacebookIcon className="p-1 uuu"/>
    <InstagramIcon className=" uuu p-1"/>
    <TwitterIcon className="uuu p-1"/>
    <PinterestIcon className=" uuu p-1"/>
</p>
        

      

    </div>
    {/* div for selling a property coloum */}
    <div className="col-lg-3  mt-5">
        <h1 className="iiii">
      SELLING A PROPERTY
        <p className=" mt-4 ssss">
            
            How Does it Work
        </p>
        </h1>
        {/* phone icon */}
<p>

          Will my Listening be Seen
</p>
{/* for message */}
<p>
How Much Could I Save

</p>
{/* for icons */}
<p className="mt-2">
Priceing
</p>
<p>
    Payment Options
</p>
        

      

    </div>
    {/* div for Buying a property */}
    <div className="col-lg-3  mt-5">
        <h1 className="iiii">
   BUYING A PROPERTY
        <p className=" mt-4 ssss">
      Why Buy A Home With Assignmentsold
        
        </p>
        </h1>
        {/* phone icon */}
<p>
How it Works
        
</p>
{/* for message */}
<p>
House Hunting Tools

</p>


        

      

    </div>
    {/* div for quick links */}
    <div className="col-lg-3  mt-5">
        <h1 className="iiii">
      QUICK LINKS
        <p className=" mt-4 ssss">
      About US
      
        </p>
        </h1>
        {/* phone icon */}
<p>
Sell Similar Property
</p>
{/* for message */}
<p>
Privacy policy
</p>



    </div>
</div>

{/* div for copyright section */}
<div>
<div className="row hhh mb-2 p-2">
        <div className="col-lg-12 jjjj justifycentre ">
      Copyright 2021-2022 AssignmentSold.Ca All Rights Reserved

        </div>

      </div>
</div>

    </div>
  );
}
