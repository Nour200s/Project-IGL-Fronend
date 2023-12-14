import React from "react" ; 
import Logo from "./../images/logo.png" ;
import image from "./../images/photo.png" ; 
import { Link } from 'react-router-dom';


function Pageprncpl(){
  console.log('Pageprncpl rendu !');
    return (
        
      <div className="  h-full bg-[#c3eefb]  ">
                 <div className="text-40px font-signature font-semibold ml-10 yt-6 mb-6">
                   <img src={Logo} alt="logo" className='w-30 inline-block items-center ' />
                    <span className=' text-[#15245B] '>Ci</span>
                    <span className=' text-[#FBBC05] '>Topia</span>
                   </div>

             
          <div className=" flex justify-around">
            <div className="font-signature">
              <div className="text-26px  font-bold text-50px ml-10 ">
                 <h1 className=''>
                 <span className="text-[#F57581]">Exploration</span>
                 <span className="text-[#15245B]">Scientifique</span>
                 </h1>
                 <h1 className='text-[#15245B]  '>Notre Répertoire </h1>
                 <h1 className="text-[#15245B] ">Complet D’articles</h1>
              </div>
              <p className='text-black text-opacity-64  ml-10 mt-10 mb-10 font-medium'>
              Explorez des milliers d'articles scientifiques <br /> provenant de domaines variés.
               Scitopia <br />vous permet de plonger au cœur des 
              découvertes <br />les plus récentes et des connaissances <br /> pointues.
              </p>
              <div className="space-x-4 ml-10">
              <Link to="/signin">
                            <button  className=" space-x-4 space-y-4 px-7 py-2 bg-[#15245B] text-[#c3eefb] rounded-full pr-8 pl-8"> S'inscrire</button>
                  </Link>
                  <Link to="/login">
                           <button className=" space-x-4 space-y-4 px-7 py-2 bg-[#c3eefb] text-[#15245B] rounded-full border-2 border-[#15245B] pr-3 pl-3 ">se connecter</button>
                   </Link>

             </div>
             </div>
             <div className="image">
                 <img src={image}  alt="photo" className="float-right  object-cover " />
              </div>
              </div>

      </div>
     
    );
  }
  
  export default Pageprncpl;