import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import "./Finaldeals.css";
export default function Finaldeals() {
  const [city, setCity] = useState()
  const [name, setname] = useState()
  const [answer, setanswer] = useState(0);


  const handlenamechange = (event) => {
    setname(event.target.value);
  }
  const handlecitychange = (event) => {
    setCity(event.target.value);
  }
  const handlesubmitclick = ()  => {
    setanswer(1);
  }

  return (




    <div>
      <div className="container">
        <h1>
          <strong>
            Test No. 1
          </strong>
        </h1>
        <div className="row">
          <div className="col-lg-3">
          <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handlenamechange} />
          </div>
          <div className="col-lg-3">
          <TextField id="outlined-basic" label="City" variant="outlined" value={city} on onChange={handlecitychange}  />
          </div>
        </div>
        <div className="row  mt-5">
          <div className="col-lg-3 ">
    <button onClick={handlesubmitclick} className=' rko' type="button">Submit</button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <p> <strong>Your Task is that when you input some values in the above text fields and Click on the submit button, you values should be displayed in the blank under this text</strong></p>
          </div>

        </div>
        <div className="row">
        {
          answer === 1  ? (
           <div> {name}  {city}</div> 
          ) : (
            <div>
            ___________________________________________________</div>
          )
        }
        </div>
      </div>
    </div>
  )
}
