import React from 'react';
import { ReactComponent as LoopIcon }from "./../images/loop.svg" ;
const SearchBar = () => {
  return (
    <div className="flex items-center justify-center rounded-full bg-gray-100 shadow-md  w-96">
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Chercher par Titre, Auteur, Mots-clés.."
        className="rounded-full bg-gray-100 shadow-md p-4 w-96 "
      />
      <div className="absolute inset-y-0 right-0 pl-6 pr-3 flex items-center ">
        <LoopIcon className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  </div>
  );
};

export default SearchBar;