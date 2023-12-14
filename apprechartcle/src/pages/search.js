import React from "react" ; 
import image from "./../images/searchimg.png" ;
import SearchBar from "./../components/searchbar" ;


function search(){
   
    return (
        
      <div className=" w-full h-full bg-[#c3eefb]  top-0 left-0 right-0 ">
         <div className="relative flex items-center justify-between p-16  gap-8">
         <div className="ml-10 mt-3">
             <h1 className=' '>
                <span className="text-[#15245B] font-poppins text-5xl font-extrabold tracking-wide uppercase">Quel Savoir Désirez-vous </span>
                <span className="text-[#F57581] font-poppins text-5xl font-extrabold tracking-wide uppercase">Découvrir ?</span>
            </h1>
              <p className="text-black text-opacity-64 font-poppins text-base font-medium tracking-wide capitalize">
              Plongez dans une mer d'articles : titres, mots-clés,<br/>
               auteurs, contenu intégral.<br/> Trouvez ce que vous cherchez <br/>
              </p>
         </div>
         <div className="image">
         <img src={image}  alt="" className=" float-right w-auto h-auto object-cover" />
         </div>         
         </div>
         <div className="flex justify-center  ">
            <SearchBar/>
         </div>

      </div>
     
    );
  }
  
  export default search;