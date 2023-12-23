import React from "react" ; 
import Filtres  from "./../components/Favorites";
import Results from "../components/accountsidebar";
import Accountsidebar from "../components/accountsidebar";
import Favoris from "../components/Favorites";
function UserAccount (){

    return (
        
      <div className="  w-ful h-full bg-[#FFFFFF]  top-0 left-0 right-0 ">
         <div className="flex flex-col md:flex-row justify-center">
             <div className=" w-auto md:w-1/3 lg:w-1/4 p-4 ">
                <Accountsidebar/>
             </div>
             <div className=" w-full md:w-2/3 lg:w-3/4 p-4">
                <Favoris/>
             </div>
         </div>
      </div>
     
    );
  }
  
  export default UserAccount;