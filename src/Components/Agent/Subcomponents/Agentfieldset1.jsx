import React from 'react'
import { useState } from 'react';
import TextField from "@mui/material/TextField";


export default function Agentfieldset1({name, age, city, other ,number, setnumber, phone, setphone, code, setcode, email, setemail}) {
   


    const handleemailchange= (event) => {
        setemail(event.target.value);
      }
      const handlephonechange = (event) => {
        setphone(event.target.value);
      }
      const handlecodechange = (event) => {
        setcode(event.target.value);
      }
      const handlenumberchange = (event) => {
        setnumber(event.target.value);
      }
      

  return (
    <>
    <div className="row">
        <div className="col-lg-3">
        {name}
        </div>
        <div className="col-lg-3">
        {age}
        </div>
        <div className="col-lg-3">
        {city}
        </div>
        <div className="col-lg-3">
        {other}
        </div>
    </div>
     
    
   
      
      <div className="row mt-5">
          <div className="col-lg-3">
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            value={phone}
            onChange={handlephonechange}
          />
          </div>
          <div className="col-lg-3">
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            value={number}
            onChange={handlenumberchange}
          />
          </div>
          <div className="col-lg-3">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleemailchange}
          />
          </div>
          <div className="col-lg-3">
          <TextField
            id="outlined-basic"
            label="Code"
            variant="outlined"
            value={code}
            onChange={handlecodechange}
          />
          </div>
        </div>
 
       
    </>
    
    
  )
}
