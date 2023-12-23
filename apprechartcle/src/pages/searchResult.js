import React from "react" ; 
import SearchBar from "./../components/searchbar" ;
import Filtres  from "./../components/Filtre";
import Results from "../components/Results";
function SearchResult (){

    return (
        
      <div className="  w-ful h-full bg-[#FFFFFF]  top-0 left-0 right-0 ">
         <div className="flex justify-center mt-10  ">
            <SearchBar/>
         </div>
         <div className="flex flex-col md:flex-row justify-center">
             <div className=" w-auto md:w-1/3 lg:w-1/4 p-4 ">
                <Filtres/>
             </div>
             <div className=" w-full md:w-2/3 lg:w-3/4 p-4">
                <Results/>
             </div>
         </div>
      </div>
     
    );
  }
  
  export default SearchResult;