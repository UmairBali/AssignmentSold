import React from "react";
import ListProperty from "./Components/ListProperties/ListProperty";
import Listing from "./Components/Listing/Listing";
import Finaldeals from "./Components/Finaldeals/Finaldeals";
import Works from "./Components/Works/Works";
import Agent from "./Components/Agent/Agent";
import Priceing from "./Components/Priceing/Priceing";
import Contact from "./Components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import App from "./App";

export default function Approutes() {
  return (
    <>
      <Routes>
        <Route path="/" Component={App} />
        <Route exact path="/ListProperty" Component={ListProperty} />
        <Route path="/Finaldeals" Component={Finaldeals} />
        <Route path="/Works" Component={Works} />
        <Route path="/Agent" Component={Agent} />
        <Route path="/Priceing" Component={Priceing} />
        <Route path="/Contact" Component={Contact} />
      </Routes>
    </>
  );
}
