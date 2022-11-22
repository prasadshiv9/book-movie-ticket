import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Movie.css";
function Movie({key, name, image,language, img }) {
  let navigate= useNavigate();

  return (
    <div
      className="banner"
      style={{
        backgroundPosition:"center center",
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${image}")`,
      }}>

      

        <h3>{name}</h3>
     
     <button onClick={()=>navigate(`/Book/${name}${image}`)}>
      BOOK TICKETS
     </button>

     

    </div>
  );
}

export default Movie;
