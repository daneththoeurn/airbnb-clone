import React, { useState } from "react";
import "./Banner.css";
import DatePicker from './DatePicker';
import { Button } from "@material-ui/core";

function Banner() {
  const [showDate, setShowDate] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showDate && <DatePicker />}
        <Button
          onClick={() => setShowDate(!showDate)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showDate ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
