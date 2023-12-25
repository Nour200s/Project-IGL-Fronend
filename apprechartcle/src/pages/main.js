import React from "react" ; 
import image from "./../images/photo.png" ; 
import Logo from "./../images/logo.png" ;
import Options  from "./../components/optionrech" ; 
import Comp from './../components/comp'

function Main(){
    return (
        
      <div className=" mt-0 p-0 h-full mb-0  grid-cols-{1} ">
        <div className=" ">
       
        <div className=" bg-[#c3eefb]  w-full h-full  flex justify-around ">
            <div className="font-signature pt-8 mt-8  ">
              <div className=" font-bold text-21px md:text-26px lg:text-50px  ml-3 sm:ml-10 ">
                 <h1 className=''>
                 <span className="text-[#F57581]">Exploration </span>
                 <span className="text-[#15245B]">Scientifique</span>
                 </h1>
                 <h1 className='text-[#15245B]  '>Notre Répertoire </h1>
                 <h1 className="text-[#15245B] ">Complet D’articles</h1>
              </div>
              <p className='text-black text-opacity-64  text-14px sm:text-21px lg:text-26px ml-3 mr-2 sm:ml-10 mt-10 mb-10 font-medium'>
              Explorez des milliers d'articles scientifiques <br /> provenant de domaines variés.
               Scitopia <br />vous permet de plonger au cœur des 
              découvertes <br />les plus récentes et des connaissances <br /> pointues.
              </p>
             
             </div>
             <div className="hidden sm:block image">
                 <img src={image}  alt="photo" className="float-right  object-cover " />
              </div>
              </div>
        </div> 

            <div className="bg-[#FFFFFF] pt-10 sm:pl-10 font-signature  sm:ml-10 ">
                        <h1 className="font-extrabold text-[#15245B] text-21px md:text-26px lg:text-50px  ml-3 sm:ml-10">A Propos De L’Equipe:</h1>
                        <p className="font-medium text-14px sm:text-21px lg:text-26px ml-3 mr-2 sm:ml-10 mt-10 mb-10 text-[#0D0D0D]">Nous sommes une équipe de cinq étudiants de l'École Nationale Supérieure <br />d'Informatique (ESI), passionnés par le génie logiciel et la technologie. Ce <br /> projet est le fruit de notre engagement dans le module de génie logiciel, où <br />nous avons entrepris de créer une plateforme intuitive pour la recherche <br /> d'articles scientifiques.</p>
                        
            </div>
            <div>
                <Options/>
                
           </div>
           <div className="bg-[#c3eefb]  w-full h-full">
             <div className=" pt-10  text-21px sm:text-26px lg:text-55px ml-3 mr-2 sm:pl-10 sm:ml-10 mt-10 font-extrabold  ">
              <h1 className="text-[#15245B]">Pourquoi Choisir <br /> Notre <span className="text-[#F57581] ">site web:</span></h1>
             </div>
             <Comp/>
            </div>

      </div>
     
    );
  }
  
  export default Main;
