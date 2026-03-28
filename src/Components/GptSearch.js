import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { Background_URL } from './Utils/Constent';

const GptSearch = () => {
  return (
    
    <>
    
      <div className="absolute -z-10 ">
       <img className='object-cover'
          src={Background_URL}
          alt="background"
      />
      </div>
      <div className='pt-[25%] md:p-0'>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  )
};

export default GptSearch