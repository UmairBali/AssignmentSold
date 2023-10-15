import React from "react";
import Navbars from "../HomePage/Navbars/Navbar";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Agentfieldset1 from "./Subcomponents/Agentfieldset1";
import { Code, Phone } from "@mui/icons-material";
import Footer from "../Footer/Footer";
export default function Agent() {
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [city, setcity] = useState();
const [other, setother] = useState();
const [phone, setphone] = useState();
const [number, setnumber] = useState();
const [code, setcode] = useState();
const [email, setemail] = useState();
const [sub, setsub] =useState();

const handlenamechange = (event) => {
  setname(event.target.value);
};
const handleagechange = (event) => {
  setage(event.target.value);
};
const handlecitychange = (event) => {
  setcity(event.target.value);
};
const handleotherchange = (event) => {
  setother(event.target.value);
}
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
const handlesubclick =() =>{
  setsub(1);
} 



  return (
    <>
      <Navbars />

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-3">     
              <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handlenamechange}
          /></div>
          <div className="col-lg-3">    
               <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            value={age}
            onChange={handleagechange}
          /></div>
          <div className="col-lg-3">    
               <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={city}
            onChange={handlecitychange}
          /></div>
          <div className="col-lg-3">    
               <TextField
            id="outlined-basic"
            label="Other"
            variant="outlined"
            value={other}
            onChange={handleotherchange}
          />
          </div>
        </div>
   

        <div className="row mt-5">
          <div className="col-lg-3">{phone}</div>
          <div className="col-lg-3">{number}</div>
          <div className="col-lg-3">{email}</div>
          <div className="col-lg-3">{code}</div>
          
        </div>


  
        
      </div>
      <div className="container">
      <div className="row mt-5">
        
          {/* Replace this tag with the Child Component */}
          <h1>
      
          <Agentfieldset1      name={name} age={age} city={city} other={other}phone={phone} setphone={setphone} 
          number={number} setnumber={setnumber} email={email} setemail={setemail} code={code} setcode={setcode}
          />
          </h1>
        </div>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <button onClick={handlesubclick} className="btn btn-warning" type="button">Submit</button>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  );
}
