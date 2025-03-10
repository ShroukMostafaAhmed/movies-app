import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, vote_average, release_date, original_language, poster_path } = movie; 

  return (
    <div className="movie-card">
      <img 
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} 
        alt={title} 
        className="w-full h-auto"
      />
      <h3 className="text-white">{title}</h3>
      <p className="text-gray-400">⭐ {vote_average} | 🗓 {release_date} | {original_language?.toUpperCase()}</p>
    </div>
  );
};

export default MovieCard;
