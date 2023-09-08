import React from 'react'
import TextField from "@mui/material/TextField";
import { useState } from 'react';
import { Last } from 'react-bootstrap/esm/PageItem';
export default function Textfieldset2({umair, setumair, email, other, number}) {






const valueumairchange = (event) => {
    setumair(event.target.value);
}



  return (
    <div className='container'>
        <div className="row mt-5">
            <div className="col-lg-4">
            {email}
            </div>
            <div className="col-lg-4">
         {number}
            </div>
            <div className="col-lg-4">
            {other}
            </div>
        
        </div>
 
 <div className="row">
<div className="col-lg-5">
<TextField
            id="outlined-basic"
            label="Umair"
            variant="outlined"
            value={umair}
            onChange={valueumairchange}
     
          />
</div>
 </div>
     
    </div>
  )
}
