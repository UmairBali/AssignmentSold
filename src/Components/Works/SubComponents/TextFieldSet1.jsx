import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function TextFieldSet1({name, age, city, child, setChild}) {
  const handleChild = (event) => {
    setChild(event.target.value);
  };

  console.log("VAlue of the child is ", child)
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-lg-4">{name}</div>
        <div className="col-lg-4">{age}</div>
        <div className="col-lg-4">{city}</div>

      </div>
    </div>
  );
}
