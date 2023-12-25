import React,{useState, useEffect, useRef } from 'react'

import  image from './../images/cmp1.png'
import image1 from './../images/cmp2.png'
import image2 from './../images/cmp3.png'
import  image3 from './../images/cmp4.png'

const Affich=({ title,description,img}) => {

    return (
      <section>
        
            <div className='flex justify-start'>
          <div className='  bg-[rgb(21,36,91)] text-[#FAFAFA]  rounded-[10px] '>
          <img src={img} alt="" className='  px-5 py-5 flex items-center justify-center ' />
         </div>
            <div>
             <h1 className='font-bold text-19px  mb-5 '>{title}</h1>
             <p className='font-semibold text-14px text-center  ml-7 mr-7 pl-7 pr-7 pb-5'>{description}</p>
             </div>
             </div>

      </section>
    )
  }

const text =[
    {
        title: "Personnalisation de Votre Expérience",
        description: "Adaptez votre recherche selon vos intérêts grâce à des filtres et options avancés." ,
        img: image 
    },
    {
        title: "Sauvegarde Personnalisée",
        description: "Gardez une trace de vos articles préférés pour un accès facile ultérieur." ,
        img: image1 
    },
    
    {
        title: "Optimisation de la decouverte",
        description: "Simplifiez votre exploration grâce à des outils puissants pour une expérience utilisateur fluide." ,
        img: image2 
    },
    {
        title: "Acces facile ",
        description: "Profitez d'une passerelle conviviale vers une multitude d'articles scientifiques." ,
        img: image3 
    }
]

function Comp() {
    const[currentIndex,setcurrentIndex] = useState(0) ;

    return(

          <section>
                 <div>
                     <div className='flex w-full h-full flex-wrap ml-10 pl-10 mb-5 pb-5 mr-4 font-signature '>
                        {
                            text.map((ptext,index) =>(
                                <Affich {...ptext} currentIndex={currentIndex} key={index} />
                            ))
                        }
                     </div>


                 </div>

           </section>


    )
}


export default Comp ; 