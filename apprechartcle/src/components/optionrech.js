import React from 'react' ;
import { useState } from 'react' ;
import  image from './../images/image3.png'
import image1 from './../images/image1.png'
import image2 from './../images/image2.png'

const Optionrech=({ title,description,img}) => {

  return (
    <section>
        <div className=' h-full bg-[rgb(21,36,91)] text-[#FAFAFA] rounded-[20px]  ml-6 mr-4'>
        <img src={img} alt="" className='w-30 pt-5 sm:ml-10 sm:pl-10 mb-5 flex items-center justify-center ' />
           <h1 className='font-bold text-19px flex items-center justify-center mb-5 '>{title}</h1>
           <p className='font-semibold text-14px text-center  ml-7 mr-7 pl-7 pr-7 pb-5'>{description}</p>
        </div>
       
    </section>
  )
}
  const options =[
    {
        title: "Recherche Avancée",
        description: "Explorez des articles scientifiques avec précision en utilisant notre fonction de recherche avancée. Cherchez dans le titre, les mots-clés, les auteurs et le texte intégral pour des résultats pertinents" ,
        img: image 
    },
    {
        title: "Filtrage des Résultats",
        description: "Affinez vos résultats de recherche selon vos besoins spécifiques. Filtrez par mots-clés, auteurs, institutions, et période de publication pour une expérience de recherche personnalisée." ,
        img: image1 
    },
    
    {
        title: "Affichage des Détails des Articles",
        description: "Plongez dans chaque article scientifique. Visualisez les détails tels que le titre, le résumé, les auteurs, les mots-clés, et accédez au texte intégral et au PDF associé pour une exploration approfondie." ,
        img: image2 
    }
]
const Options = () =>{
    const[currentIndex,setcurrentIndex] = useState(0) ;

     return(
           <section>
                 <div>
                     <h1 className='flex items-center justify-center  font-signature font-extrabold text-[#15245B] mt-10 pt-10 mb-10 ml-6 text-50px'> Outils de Recherche <br />Scientifique </h1>  
                     <div className='flex w-full h-full flex-nowrap ml-6 mr-4 font-signature '>
                        {
                            options.map((option,index) =>(
                                <Optionrech {...option} currentIndex={currentIndex} key={index} />
                            ))
                        }
                     </div>


                 </div>

           </section>
     )
}

export default Options ; 