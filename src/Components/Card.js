import React from "react";
import './Card.css';

export const Card = ({movie}) => {
    let backgroundImageStyle = {
        backgroundImage: `url(${movie.backgroundurl})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
      };
  return (
    
    <>
        
      <div className="movie_card" >
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={movie.imgurl}
            />
            <h1>{movie.name}</h1>
            <h4>{movie.year}</h4>
            <span className="minutes">{movie.time}</span>
            <p className="type">{movie.movieType}</p>
          </div>
          <div className="movie_desc">
            <p className="text">
                {movie.movieDesc}
            </p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <i className="material-icons">share</i>
              </li>
              <li>
                 <i className="material-icons">favorite</i>
              </li>
              <li>
                <i className="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back" style={backgroundImageStyle}></div>
      </div>
    </>
  );
};
