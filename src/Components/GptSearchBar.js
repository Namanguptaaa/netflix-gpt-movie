import React, { useRef } from "react";
import lang from "./Utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "./Utils/openai";
import { getSuggestedQuery } from "@testing-library/dom";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handelGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to GPT API and get Movies Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Sholay, Don, Gadar, Golmaal, Koi mil gaya ";

    // const gptResults = await openai.chat.completions.create({
    //   model: "gpt-4o-mini",
    //   messages: [
    //     //  { role: 'developer', content: 'Talk like a pirate.' },
    //     { role: "user", content: gptQuery },
    //   ],
    // });
    // console.log(gptResults.choices[0].message.content);
    const dummyResponse = "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padoshan";
    
  };
  return (
    <div
      className="pt-[10%] flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg"
          onClick={handelGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
