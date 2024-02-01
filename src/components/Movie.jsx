import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let result = await fetch("https://api.tvmaze.com/search/shows?q=all");
        result = await result.json();
        setMovie(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="head-text">Shows List</h1>
        <div className="row">
          {movie.map((item) => (
            <div key={item.show.id} className="col-lg-4 col-md-6 col-12">
              <div className="cards">
                <img src={item.show.image && item.show.image.medium} alt="" />
                <div className="content">
                  <div className="top">
                    <div className="titels">
                      <h2 className="name">{item.show.name}</h2>
                      <h3 className="genre">
                        Genre: {item.show.genres.join(", ")}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3>Language: {item.show.language}</h3>
                  </div>
                  <div>
                    <h3>Rating: {item.show.rating.average}</h3>
                  </div>
                  <Link to={`/movie_details/${item.show.id}`}>Show More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
