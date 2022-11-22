import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Mall from "./Mall";

import "./Book.css";

function Book() {
  const { id, image, date, overview } = useParams();
  return (
    <div className="book">
      <Header />
      <div className="book_contents">
        <div
          className="book_image"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${image}")`,
            backgroundPosition: "center center",
          }}
        >
          <h2 className="book_name">
            {id} {"U/A"}
          </h2>
      
       
        </div>
        <div className="banner_right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgM3_d7_UxbukUqc7is5HbYPyja2OZnjrgy8f6hJEy13PxUnHraOtX1QOJswcJ4PP9-4&usqp=CAU"
            alt=""
          />
          {/* <h2>Enjoy your best Experience at PVR</h2> */}
          <img
            className="banner_image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCgkQaIeh92QFIZn_gTfPiaaMQ9l-4ZzSvuRIIjODJYCRcNPuEILcNU9gfEBvArooC7Y&usqp=CAU"
            alt=""
          />
        </div>
      </div>
          <Mall/>
    </div>
  );
}

export default Book;
