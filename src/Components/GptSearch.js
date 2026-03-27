import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { Background_URL } from './Utils/Constent';

const GptSearch = () => {
  return (
    
    
    <div>
      <div className="absolute -z-10 ">
       <img
          src={Background_URL}
          alt="background"
      />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
};

export default GptSearch