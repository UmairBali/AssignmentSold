import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function DrawerRangeSlider() {
  const [rangeSliderValues, setRangeSliderValues] = useState({
    value1: 0,
    value2: 4500000,
  });
  const handleRangeSliderChange = (value1, value2) => {
    setRangeSliderValues({ value1, value2 });
  };

  const min = 1;
  const max = 50;
  const incrementValue = 0.5;

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        className="slidercolor"
        getAriaLabel={() => "Temperature range"}
        value={[rangeSliderValues.value1, rangeSliderValues.value2]}
        onChange={handleRangeSliderChange}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        step={incrementValue}
        sx={{ color: "#F6941C" }}
      />
    </Box>
  );
}