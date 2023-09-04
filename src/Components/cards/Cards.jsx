import React from "react";
import "./Cards.css";
import imgz from "../images/1.jpeg";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export default function Cards() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="container mb-5">
      <div className="row">
        {/* For the Cards */}
        <div className="col-lg-6">
          {/* Card Designing in Here */}
          <div className="row cardWidth">
            <div className="w-100 images">
  <div>
 
  </div>
            </div>
            <div className="w-100 cardbody">
              <div className="row mt-1">
                {/* div of condo button */}
                <div className="col-lg-6 ">
                  <button className="btn1" type="button">
                    Condo
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
              <div class="col-lg-12 jbh">Was 550000$|$1100Sqft</div>
              {/* div for third line */}
              <div className="row">
                <strong className="ghghg">
                  Now $514990 | <span className="ghghg2">$1100SQft</span>
                </strong>
              </div>
              {/* div for fourth Line */}

              <div className="row mt-1">
                {/* div of condo button */}
                <div className="col-lg-6 ">Nuvo Condo</div>
                {/* div of posted date */}
                <div className="col-lg-6">
                  <strong className="kkk">
                    {" "}
                    Closed : <span className="datebtn">5 Feb</span>
                  </strong>
                </div>
              </div>
              {/* div for fifth line */}
              <div className="row mt-1">
                {/* div of condo button */}
                <div className="col-lg-12 ">
                  <strong className="sae2">
                    {" "}
                    Centre Court : <span className="sae">319 Javis ST</span>
                  </strong>
                </div>
              </div>
              {/* div of lorem text */}
              <div>
                <p className="ptxt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores sit eveniet ad corporis laudantium! Beatae ullam
                  quisquam eius quos reprehenderit tenetur temporibus ratione
                  pariatur aut, dignissimos a hic earum velit.
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
        {/* For the Maps */}
        <div className="col-lg-6">
          <iframe className="yyy"
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
