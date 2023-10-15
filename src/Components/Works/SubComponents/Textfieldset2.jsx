import React from 'react'
import TextField from "@mui/material/TextField";
import { useState } from 'react';
import { Last } from 'react-bootstrap/esm/PageItem';
export default function Textfieldset2({umair, setumair, saif, setsaif ,email, other, number}) {






const valueumairchange = (event) => {
    setumair(event.target.value);
}
const valuesaifchange = (event) => {
  setsaif(event.target.value);
}
const handlesubbclick =() => {
  setsaif();
};



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

 <div className="row mt-5">
<div className="col-lg-6">
<TextField
            id="outlined-basic"
            label="Saif"
            variant="outlined"
            value={saif}
            onChange={valuesaifchange}
     
          />
</div>
<div className="col-lg-6">
  <button onClick={handlesubbclick} className=' btn btn-warning' type="button">Submit</button>
</div>

 </div>
     
    </div>
  )
}
