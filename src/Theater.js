import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Seats from "./Seats";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Theatre.css";
function Theater() {
  const [selected, setSelected] = useState([]);
  const { image, mall,name } = useParams();
  const price = 290;
  const totalPrice = price * selected.length;
const navigate = useNavigate();
  console.log("***", selected.length);

 

  return (
    <div className="theatre">
      <div className="theatre_body">
        <h2>
          {name} <spam>{"AUDI 02"}</spam>
        </h2>
       
      </div>

      <Seats setSelected={setSelected} 
            
      />
      <div className="theatre_title">
        <h2 className="theatre_mall">{mall}</h2>
      </div>

      {selected.length !== 0 ? (
        <>
          <div className="theatre_bottom">
            <>
              <spam>
                <h3>SEATS : {selected.toString()}</h3>
              </spam>
              <div className="theatre_price">
                <h3>Total INR</h3>
                <h1>₹{totalPrice}</h1>
              </div>
            </>
          </div>

          <div className="theatre_footer">
            <ArrowCircleRightIcon
              onClick={() =>
                navigate(
                  `/Confirmation/${name}/${selected}/${mall}/${image}/${totalPrice}`
                )
              }
              className="theatre_icon"
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Theater;
