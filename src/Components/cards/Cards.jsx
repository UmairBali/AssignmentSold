import React from "react";
import { useState, useEffect } from "react";
import "./Cards.css";
import imgz from "../images/1.jpeg";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import Crop32Icon from '@mui/icons-material/Crop32';
import axios from "axios";
import baseURL from "../../Config";
export default function Cards() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseURL}/api/Assignment/GetAssignments`)
      .then((response) => {
        console.log("My Api Response",response)
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="container mb-5">
      <div className="row">
        {/* For the Cards */}

        <div className="col-lg-6 dgrid scroller">
          {/* Card Designing in Here */}
          {data?.data?.map((item) => (
            <div className="">
              <div className="row cardWidth">
                <div className="w-100 p-0 images">
              
                  <div className="imgbkg p-1">
                  <button className="mt-1  dealsbtn" type="button">Hot Deals</button>
                  <button className="idbtn " type="button">ID: {item.id} </button>
                  <button className="bedbtn " type="button">< BedIcon className="iconb"/>  {item.bed} </button>
                  <button className="bedbtn " type="button">< BathtubIcon className="iconb"/>  {item.bath} Bath </button>
                  <button className="bedbtn " type="button">< Crop32Icon className="iconb"/> Area </button>
                  <button className="bedbtn " type="button">< LocalParkingIcon  className="iconb"/> Park {item.parking} </button>
                  </div>
                </div>
                <div className="w-100   cardbody">
                  <div className="row mt-1">
                    {/* div of condo button */}
                    <div className="col-lg-6 ">
                      <button className="btn1" type="button">
                        {item.type}
                      </button>
                    </div>
                    {/* div of posted date */}
                    <div className="col-lg-6">
                      <strong className="postebbtn">
                        {" "}
                        Posted : <span className="datebtn">5 Feb</span>
                      </strong>
                    </div>
                  </div>
                  {/* div of second line text */}
                  <div class="col-lg-12 jbh">
                    Was ${item.assignmentPrice} |$1100Sqft
                  </div>
                  {/* div for third line */}
                  <div className="row">
                    <strong className="ghghg">
                      Now ${item.originalPrice} |{" "}
                      <span className="ghghg2">$1100SQft</span>
                    </strong>
                  </div>
                  {/* div for fourth Line */}

                  <div className="row mt-1">
                    {/* div of condo button */}
                    <div className="col-lg-7 pname ">{item.projectName}</div>
                    {/* div of posted date */}
                    <div className="col-lg-5 cname">
                      <strong className="kkk">
                        {" "}
                        Closed : <span className="datebtn">5 Feb</span>
                      </strong>
                    </div>
                  </div>
                  {/* div for fifth line */}
                  <div className="row mt-2 gname ">
                    {/* div of condo button */}
                    <div className="col-lg-12 ">
                      <strong className="sae2">
                        {" "}
                        {item.developer} | <span className="sae">{item.address}</span>
                      </strong>
                    </div>
                  </div>
                  {/* div of lorem text */}
                  <div>
                    <p className="ptxt">
               {item.highlight.slice(0,45)}...
                    </p>
                  </div>
                  {/* div of checkbox */}
                  <div className="boxdiv">
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* For the Maps */}
        <div className="col-lg-6">
          <iframe
            className="yyy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53965.86115330244!2d72.23982678218863!3d32.288571810743306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39213c7d317513e1%3A0xfe406da0c04429b0!2sJauharabad%2C%20Khushab%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693831415052!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
