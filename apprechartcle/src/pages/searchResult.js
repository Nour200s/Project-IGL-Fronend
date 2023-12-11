import React from "react" ; 
import SearchBar from "./../components/searchbar" ;
import Filtres  from "./../components/Filtre";
import Results from "../components/Results";
function SearchResult (){

    return (
        
      <div className="  w-ful h-full bg-[#FFFFFF]  top-0 left-0 right-0 ">
         <div className="flex justify-center m-10  ">
            <SearchBar/>
         </div>
         <div className="flex justify-center">
             <div className="w-1/4 p-4 flex justify-center">
                <Filtres></Filtres>
             </div>
             <div className="w-3/4 p-4">
                <Results></Results>
             </div>
         </div>

      </div>
     
    );
  }
  
  export default SearchResult;