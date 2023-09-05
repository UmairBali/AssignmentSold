import React, { useState } from "react";
import Navbars from "../HomePage/Navbars/Navbar";
import TextField from "@mui/material/TextField";
import "./ListProperties.css";
export default function ListProperty() {
  const [city, setCity] = useState("")
 const [district, setdistrict] = useState()
 const [area ,setarea] = useState ()
 const [country ,setcountry] = useState ()
 const [number ,setnumber] = useState ()
 const [phone ,setphone] = useState ()
 const [email ,setemail] = useState ()
 const [other ,setother] = useState ()


  const handleCityChange = (event) =>{
    setCity(event.target.value);
  }
  const handlesubclick = () => {
    console.log ("okkkk" ,city,district,area,country,number,phone,email,other)
  }
  const handledistrictchange = (event) =>{
    setdistrict(event.target.value);
  }
  const handleareachange = (event) => {
    setarea(event.target.value);
  }
  const handlecountrychange = (event) => {
    setcountry(event.target.value);
  }
  const handlenumberChange = (event) => {
    setnumber(event.target.value);
  }
  const handlephoneChange = (event) => {
    setphone(event.target.value);
  }
  const handleemailChange = (event) => {
    setemail(event.target.value);
  }
  const handleotherChange = (event) => {
    setother(event.target.value);
  }
  // console.log("City Value is ", city)
  return (
    <div>
      <Navbars />

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              value={city}
              onChange={handleCityChange}
            />
          </div>
          <div className="col-lg-3">
            <TextField
              id="outlined-basic"
              label="District"
              variant="outlined"
              value={district}
              onChange={handledistrictchange}
            />
          </div>
          <div className="col-lg-3">
            <TextField
              id="outlined-basic"
              label="Area"
              variant="outlined"
              value={area}
              onChange={handleareachange}
            />
          </div>
          <div className="col-lg-3">
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              value={country}
              onChange={handlecountrychange}
            />
          </div>
        </div>
      </div>
      {/* div for second line */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              value={number}
              onChange={handlenumberChange}
            />
          </div>
          <div className="col-lg-3">
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              value={phone}
              onChange={handlephoneChange}
            />
          </div>
          <div className="col-lg-3">
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              value={email}
              onChange={handleemailChange}
            />
          </div>
          <div className="col-lg-3">
            <TextField
              id="outlined-basic"
              label="other"
              variant="outlined"
              value={other}
              onChange={handleotherChange}
            />
          </div>
        </div>
      </div>
      {/* div for submit button */}
      <div className="container">
        <div className="mt-5 ">


            <button onClick={handlesubclick} className="s-btn" type="button">SUBMIT HERE</button>
   
        </div>
      </div>
    </div>
  );
}
