import React from "react";
import TextField from "@mui/material/TextField";
import "../Finaldeals///Finaldeals.css";
import { useState } from "react";
export default function Works() {
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [city, setcity] = useState();
  const [result, setresult] = useState(2);
const [email, setemail] = useState();
const [other, setother] = useState();
const [number, setnumber] = useState();
const [password, setpassword] = useState(); 
const [ok, setok] = useState(10);




  const handlenamechange = (event) => {
    setname(event.target.value);
  };
  const valueagechange = (event) => {
    setage(event.target.value);
  };
  const valuecitychange = (event) => {
    setcity(event.target.value);
  };
  const handleokclick = () => {
    setresult(1);
  };
  const handlehideclick = () => {
setok(ok-1)
  }
  const handlehelpclick = () => {
    setok(ok+1);
  }
  const handlerkclick = () => {
    setresult(0);
  };
  const handleemailchange =(event) => {
    setemail(event.target.value);
  };
  const handlepasswordchange =(event) => {
    setpassword(event.target.value);
  };
  const handleotherchange =(event) => {
    setother(event.target.value);
  };
  const handlenumberchange =(event) => {
    setnumber(event.target.value);
  };

  return (
    <div className="container">
      <div className="row mt-3 j-cntr">WORK PAGE</div>
      <div>Result state is {result}</div>
      <div className="row mt-5">
        <div className="col-lg-4">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handlenamechange}
          />
        </div>
        <div className="col-lg-4">
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            value={age}
            onChange={valueagechange}
          />
        </div>
        <div className="col-lg-4">
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={city}
            onChange={valuecitychange}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-2">
          <button onClick={handleokclick} className="np " type="button">
            Hide Results
          </button>
        </div>
        <div className="col-lg-6">
          {/* When Click on the button handleRkClick function is called */}
          <button
            onClick={handlerkclick}
            className="btn btn-warning "
            type="button"
          >
            Click Here to see the Results
          </button>
        </div>
      </div>
      <div className="mt-5">
        {result === 0 ? (
          <div>
            {name} {age} {city}
          </div>
        ) : (
          <div>Results are Hidden</div>
        )}
      </div>













      <div className="row">
        <div className="test2">THis is the Test 2</div>
        <div className="row mt-5">
          <div className="col-lg-3"><TextField id="outlined-basic" label="email" variant="outlined" value={email} onChange={handleemailchange} /></div>
          <div className="col-lg-3"><TextField id="outlined-basic" label="password" variant="outlined" value={password} onChange={handlepasswordchange} /></div>
          <div className="col-lg-3"><TextField id="outlined-basic" label="other" variant="outlined" value={other} onChange={handleotherchange} /></div>
          <div className="col-lg-3"><TextField id="outlined-basic" label="Number" variant="outlined" value={number} onChange={handlenumberchange} /></div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-3">
          State is {ok}
          </div>
          
        </div>

        <div className="mt-5">
      {ok ===5 ? (
        <div>
              Hello! Please Hide me! Hint: Use State 5
        </div>
      ) : (
        <div>
          {email} {password} {other} {number}
        </div>
      )}
        </div>
       <div className="row mt-5">
        <div className="col-lg-3">
          <button onClick={handlehelpclick} className="btn btn-warning w-100">
            Help it
          </button>
        </div>
        <div className="col-lg-3">
          <button onClick={handlehideclick} className="btn btn-warning w-100">
            Hide it
          </button>
        </div>
       </div>
      </div>
    </div>
  );
}
