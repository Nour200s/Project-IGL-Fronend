import React, { useState } from "react";
import Word from "./../images/word.svg";
import Author from "./../images/author.svg";
import Instituts from "./../images/instituts.svg";
import date from "./../images/date.svg";

function Filter({ title, icon }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  function useSearchVisibility() {
    setIsSearchVisible(!isSearchVisible);
  }

  return (
    <div onClick={useSearchVisibility} className=" bg-[#c3eefb] rounded-xl cursor-pointer shadow-md p-2 m-4  h-auto w-auto">
      <div className=" bg-[#c3eefb] relative flex justify-center">
      <div className="absolute inset-y-0 left-0 pl-3 pr-6 flex items-center">
        <img src={icon} className="h-5 w-5 text-gray-400" alt="Filter Icon" />
      </div>
      <div className="text-blue-800 font-poppins text-lg font-normal tracking-wide">
        {title}
      </div>
      </div>
      {isSearchVisible && (
        <div className="m-4 ">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-xl"
          />
        </div>
      )}
    </div>
  );
}

const filters = [
  {
    title: "Mots clés",
    icon: Word,
  },
  {
    title: "Auteur",
    icon: Author,
  },
  {
    title: "Institutions",
    icon: Instituts,
  },
  {
    title: "Periode",
    icon: date,
  },
];

function Filters() {
  return (
    <div className="p-20 ">
      <h4 className="text-blue-800 font-poppins text-5xl font-bold tracking-wide uppercase m-4">
        Filtres
      </h4>
      <div className="">
        {filters.map((filter, index) => (
          <Filter key={index} {...filter} />
        ))}
      </div>
    </div>
  );
}

export default Filters;
