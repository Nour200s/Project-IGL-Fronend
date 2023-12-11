import React from "react" ; 
import Logo from "./../images/logo.png" ;
import image from "./../images/photo.png" ;
import { Link } from 'react-router-dom';

function Main(){
   
     
 
    return (
        
      <div className=" w-full h-full bg-[#c3eefb]  fixed top-0 left-0 right-0">
         <div className="text-2xl font-signature mt-6">
         <img src={Logo} alt="logo" className='w-20 inline-block items-center  ' />
         <span className=' text-[#15245B] '>Ci</span>
         <span className=' text-[#FBBC05] '>Topia</span>
         </div>
         <div className="image">
         <img src={image}  alt="" className=" float-right w-90 h-70 object-cover" />
         </div>
         <div className="">
         <div className="text-3xl font-signature- ml-10 mt-3">

               <h1 className=' '>
                <span className="text-[#F57581]">Exploration</span>
                <span className="text-[#15245B]">Scientifique</span>
               </h1>
               <h1 className='text-[#15245B]  '>Notre Répertoire </h1>
               <h1 className="text-[#15245B] ">Complet D’articles</h1>
         </div>
              <p className='text-[#000000] ml-10 mt-10 mb-10'>
              Explorez des milliers d'articles scientifiques <br /> provenant de domaines variés.
               Scitopia <br />vous permet de plonger au cœur des 
              découvertes <br />les plus récentes et des connaissances <br /> pointues.
              </p>
         </div>
         <div className="space-x-4 ml-10">
         <button className=" space-x-4 space-y-4 px-7 py-2 bg-[#15245B] text-[#c3eefb] rounded-full pr-8 pl-8"> S'inscrire</button>
         <Link to="./login"> <button className=" space-x-4 space-y-4 px-7 py-2 bg-[#c3eefb] text-[#15245B] rounded-full border-2 border-[#15245B] pr-3 pl-3 ">se connecter</button> </Link>
         </div>
      </div>
     
    );
  }
  
  export default Main;