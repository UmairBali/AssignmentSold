import React from "react";
import TextField from "@mui/material/TextField";
import "../Finaldeals///Finaldeals.css";
import { useState } from "react";
import TextFieldSet1 from "./SubComponents/TextFieldSet1";
import Textfieldset2 from "./SubComponents/Textfieldset2";
import Navbars from "../HomePage/Navbars/Navbar";
import Footer from "../Footer/Footer";

export default function Works() {
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [city, setcity] = useState();
  const [made, setmade] = useState();
  const [claim, setclaim] = useState();
  const [child, setChild] = useState("");
const [email, setemail] = useState();
const [number, setnumber] =useState();
const [other, setother] =useState();
const [umair, setumair] =useState();
const [saif, setsaif] =useState();
const [bostan, setbostan] =useState(0);

  const handlenamechange = (event) => {
    setname(event.target.value);
  };
  const handleagechange = (event) => {
    setage(event.target.value);
  };
  const handlecitychange = (event) => {
    setcity(event.target.value);
  };
  const valueemailchange = (event) => {
    setemail(event.target.value);
  };
  const valuenumberchange =(event) => {
    setnumber(event.target.value);
  };
  const valueotherchange =(event) => {
    setother(event.target.value);
  };
  const handlesubmitclick = () => {
    setmade(1);
  };
  const handleclaimclick = () => {
    setclaim(1);
  };
  

  return (
   

    <div className="container">
      <Navbars/>
      <div className="row mt-3 j-cntr">WORK PAGE</div>
      <p>
        You have 3 input fields, when you enter the data in the three input
        fields and clcik on the submit button, Text will be shown below the
        button, and the Text State <strong>Hey! You made it</strong> and under
        the text, there will be a button which state{" "}
        <strong>Click to claim rewards</strong> and after clicking on that
        button, another text box appears which state{" "}
        <strong>Booyaah! We did it! AKA Rewards Claimed</strong>
      </p>
      <div className="row mt-5">
        <div className="col-lg-4 bgy">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handlenamechange}
          />
        </div>
        <div className="col-lg-4 bgy">
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            value={age}
            onChange={handleagechange}
          />
        </div>
        <div className="col-lg-4 bgy">
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={city}
            onChange={handlecitychange}
          />
        </div>
      </div>
      <div>

      </div>
      <h1>
      {umair} 
      </h1>
      <TextFieldSet1 child={child} setChild={setChild} name={name} age={age} city={city}/>
     
      <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4 bgy">
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            value={email}
            onChange={valueemailchange}

          />
        </div>
        <div className="col-lg-4 bgy">
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            value={number}
            onChange={valuenumberchange}

          />
        </div>
        <div className="col-lg-4 bgy">
          <TextField
            id="outlined-basic"
            label="Other"
            variant="outlined"
            value={other}
            onChange={valueotherchange}
     
          />
        </div>
        <div>
          {bostan ===0 ? (
            <div>
              {saif}
            </div>
          ):(null)}
        </div>
      </div>
      <Textfieldset2 saif={saif} setsaif={setsaif}  umair={umair} setumair={setumair} email={email} number={number} other={other} />
      </div>
      <Footer/>
    </div>
  );
}
