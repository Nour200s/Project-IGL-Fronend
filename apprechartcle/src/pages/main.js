import React,{ useState } from "react" ; 
import Logo from "./../images/logo.png" ;
import image from "./../images/image.png" ;
import './../index.css' ;

function Main(){
  
 
    return (
        
      <div className="flex justify-between items-centerw=full h=full bg-c3eefb fixed">
         <div className="flex items-center">
         <img src={Logo} className='absolute top-1 left-1 w-20 h-20 ' />
         <span className=' text-[#15245B] text-lg font-signature '>ciTopia</span>

         </div>
         <div className="image">
         <img src={image} className="" />
         </div>
         <div className="header">
               <h1 className=''>
               Exploration Scientifique : Notre Répertoire Complet D’articles
               </h1>
         </div>
         <div className="description">
              <p className=''>
              Explorez des milliers d'articles scientifiques provenant de domaines variés.
               Scitopia vous permet de plonger au cœur des 
              découvertes les plus récentes et des connaissances pointues.
              </p>
         </div>
         <div className="main-button">
            <button> sign in </button>
            <button>Log In </button>
          </div>
      </div>
     
    );
  }
  
  export default Main;