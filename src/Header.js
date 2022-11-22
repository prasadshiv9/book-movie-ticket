import React from "react";
import "./Header.css";
import BookOnlineIcon from '@mui/icons-material/BookOnline';

import PlaceIcon from '@mui/icons-material/Place';
function Header() {
  return (
    <div className="header">
      <img
        className="header_image"
        src="https://thumbs.dreamstime.com/z/globe-film-strip-25820158.jpg"
        alt="not"
      />
      <div className="header_mid">
        <BookOnlineIcon className="header_icon" />
         <h1 className="header_input">Book My Ticket</h1>
      </div>
      <div className="header_right">
        <PlaceIcon className="header_right_icon"/>
        <h3 className="header_right_text">Kolkata</h3>
      </div>
    </div>
  );
}

export default Header;
