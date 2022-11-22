import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import "./Show.css"
function Show() {
    const API_KEY = "c3ef2082560656aa2ec5edc8f8f6a09f";
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        const movieData = async () => {
            await fetch(
              `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
            ).then((response) => response.json()).then((data) => setMovies(data.results));
        }
        movieData();
    },[])
    console.log("❤️❤️",movies)
    return (
      <div className="nowShowing">
        <h2>NOW SHOWING</h2>
        <div className="nowShowing_movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              name={movie.original_title || movie.title || movie.name} 
              image={movie.poster_path}
              language={movie.original_language}
              img={movie.backdrop_path}
            />
          ))}
        </div>
      </div>
    );
}

export default Show
