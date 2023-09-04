import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Select.css";
import RangeSlider from "../Rangeslider/Rangeslider";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import ListIcon from '@mui/icons-material/List';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
export default function Selectxx() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className=" mt-5">
      <div className="container">
      <div className=" mt-5 dyy">ASSIGNMENTS</div>
      </div>
 <div className="container">
 <div className="row mt-1">
        <div className="col-lg-11 borders p-2">
          <div className="row p-1">
            <div className="col-lg-4 ">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  "Select By Regioon,City,Street ID"
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Select By Regioon,City,Street ID"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-6">
                  <RangeSlider />
                </div>
                <div className="col-lg-6">
                  <RangeSlider />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row p-1">
                <div className="col-lg-4 p-1">
                  <div>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        "Building Type"
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Building Type"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>ALL</MenuItem>
                        <MenuItem value={20}>Freehold Town</MenuItem>
                        <MenuItem value={30}>Condo</MenuItem>
                        <MenuItem value={30}>Detached</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="col-lg-4 p-1">
                  <div>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        "Beds"
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Beds"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>ALL</MenuItem>
                        <MenuItem value={20}>Freehold Town</MenuItem>
                        <MenuItem value={30}>Condo</MenuItem>
                        <MenuItem value={30}>Detached</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="col-lg-4 p-1">
                  <div>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        "Filters"
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Filters"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>ALL</MenuItem>
                        <MenuItem value={20}>Freehold Town</MenuItem>
                        <MenuItem value={30}>Condo</MenuItem>
                        <MenuItem value={30}>Detached</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1 borders aligncenter justifycenter">
          <SearchOutlinedIcon className="iconsearch" />
        </div>
      </div>
 </div>
<div className="container">
<div className="row">
        <div className="col-lg-6 gkkk mt-3">AT LOW PRICE (RESULTS)</div>
        <div className="col-lg-6 alignright  mt-3">
          {/* sorting button div */}
          <div className="p-2 mt-2 w-80">
            <button className="primary btn justifycentre " type="button">
              <UnfoldLessIcon />
              Sorting
            </button>
          </div>
          {/* mixed button div */}
          <div className="p-2">
            <button className="btn bbbbb ">
            <div className="mainw">
                <div className="icon">
                <CloseFullscreenIcon className="bbbbb"/>
                </div>
                <div className="text"> MIXED </div>
              </div>
          </button>
          </div>
          {/* list button div */}
          <div className="p-2">
            <button className="btn bbbbb ">
            <div className="mainw">
                <div className="icon">
                <ListIcon className="bbbbb" />
                </div>
                <div className="text">List</div>
              </div>
            </button>
          </div>
          {/* map div */}
          <div className="p-2">
            <button className="btn bbbbb ">
              <div className="mainw">
                <div className="icon">
                  <MapOutlinedIcon className="bbbbb" />
                </div>
                <div className="text"> MAP</div>
              </div>
            </button>
          </div>
        </div>
      </div>
</div>

    </div>
  );
}
