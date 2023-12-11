import React from "react" ; 
import image from "./../images/photo.png" ; 
import Logo from "./../images/logo.png" ;
import Options  from "./../components/optionrech" ; 

function Main(){
    return (
        
      <div className=" mt-0 p-0 h-full mb-0  grid-cols-{1} ">
        <div className="bg-[#c3eefb]">
       
             <div className="image">
             <img src={image}  alt="photo" className=" float-right  w-40 h-40" />
             </div>

         <div className="">
            <div className="text-3xl font-signature- ml-10 font-extrabold ">

                  <h1 className=''>
                  <span className="text-[#F57581]">Exploration</span>
                  <span className="text-[#15245B]">Scientifique</span>
                 </h1>
                 <h1 className='text-[#15245B]  '>Notre Répertoire </h1>
                 <h1 className="text-[#15245B] ">Complet D’articles</h1>
           </div>
              <p className='text-[#000000] ml-10 mt-10 pb-10'>
              Explorez des milliers d'articles scientifiques <br /> provenant de domaines variés.
               Scitopia <br />vous permet de plonger au cœur des 
              découvertes <br />les plus récentes et des connaissances <br /> pointues.
              </p>

         </div>
        </div> 

            <div className="bg-[#FFFFFF] pt-10 pl-10 font-signature ">
                        <h1 className="font-extrabold">A Propos De L’Equipe:</h1>
                        <p className="font-medium">Nous sommes une équipe de cinq étudiants de l'École Nationale Supérieure <br />d'Informatique (ESI), passionnés par le génie logiciel et la technologie. Ce <br /> projet est le fruit de notre engagement dans le module de génie logiciel, où <br />nous avons entrepris de créer une plateforme intuitive pour la recherche <br /> d'articles scientifiques.</p>
                        <h1>Outils de Recherche <br />Scientifique</h1>
            </div>
            <div>
                <Options/>
                
             </div>

      </div>
     
    );
  }
  
  export default Main;