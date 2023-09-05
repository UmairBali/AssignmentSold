import React from "react";
import "./Heading.css";
import { useState } from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Heading() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(1);
  const [name, setName] = useState("Click to Change Name");
const [score, setscore] = useState(0)
  const handleIncrementClick = () => {
    setNum(num + 1);
  };
 const handlebackwardclick = () => {
  setscore(score + 1);
 };
 const handleforwaedclick = () => {
  setscore(score - 1);
 };
  const handleresetclick = () => {
    setscore(0)
  }
  const handleDecClick = () => {
    setNum(num - 1);
  };
  const handleResClick = () => {
    setNum(0);
  };

  const handleNameChangeClick = () => {
    if (count === 1) {
      setName("Salman");
    } else if (count === 2) {
      setName("Umair");
    } else if (count === 3) {
      setName("Bostan");
    } else if (count === 4) {
      setName("saif");
    } else {
      setName("Chutti kr");
    }

    setCount(count + 1);
  };
  const handleNameResetClick = () => {
    setName("Umair");
  };

  console.log(count);
  return (
    <>
      <div className="pb-3 jkk justifycentre aligncentre container">
        LIVE OFF MARKET INVENTORY
      </div>
      {/* Salman Work */}
      <div className="salmanwork">
        <div className="container jaadu">Hello {num}</div>
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-1">
              <button
                onClick={handleIncrementClick}
                className="btn btn-primary"
              >
                Increment
              </button>
            </div>
            <div className="col-lg-1">
              <button onClick={handleDecClick} className="btn btn-warning">
                Decrement
              </button>
            </div>
            <div className="col-lg-1">
              <button onClick={handleResClick} className="btn btn-danger">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Umair Work */}
      <div className="umairWork">
    <div className="container jaadu">Total Score:  {score}
    <div className="row">
      <div className="col-lg-2">
<button onClick={handleforwaedclick} className="c-btn" type="button"><KeyboardDoubleArrowLeftIcon/></button>
      </div>
      <div className="col-lg-2">
<button onClick={handlebackwardclick} className="c-btn" type="button"><KeyboardDoubleArrowRightIcon/></button>
      </div>
      <div className="col-lg-2">
<button onClick={handleresetclick} className="c-btn" type="button">Reset</button>
      </div>
    </div>
    </div>
{score === 10 ? (    <div className="container jaadu">Your Goal Is Achieved</div>) : (null)}
     
      
      
      </div>

      {/* {num === 3 ? () : ()} */}

      {num === 3 ? (
        <div>
          <div className="container jaadu">Hi! {name}</div>
          <div className="container">
            <div className="row pb-5">
              <div className="col-lg-2">
                <button
                  onClick={handleNameChangeClick}
                  className="btn btn-primary"
                >
                  Change Name
                </button>
              </div>
              <div className="col-lg-2">
                <button
                  onClick={handleNameResetClick}
                  className="btn btn-warning"
                >
                  Reset Name
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
