import React from 'react';
import './HomeCard.css';

export const HomeCard = ({ movie }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${movie.backgroundurl})`,
  };

  return (
    <div className="homecard_container">
      <div className="homecard_info">
        <div className="homecard_header">
          <img className="homecard_poster" src={movie.imgurl} alt={movie.name} />
          <h1>{movie.name}</h1>
          <h4>{movie.year}</h4>
          <span className="homecard_duration">{movie.time}</span>
          <p className="homecard_type">{movie.movieType}</p>
        </div>
        <div className="homecard_description">
          <p className="text">{movie.movieDesc}</p>
        </div>
        <div className="homecard_social">
          <ul>
            <li><i className="material-icons">share</i></li>
            <li><i className="material-icons">favorite</i></li>
            <li><i className="material-icons">chat_bubble</i></li>
          </ul>
        </div>
      </div>
      <div className="homecard_background" style={backgroundImageStyle}></div>
    </div>
  );
};
