
import React,{useState, useEffect, useRef } from 'react'
import image2 from './../images/V1.png'
import  image3 from './../images/V2.png'


const Affich=({ Nom,prenom,Email}) => {

    return (
      <section>
        
            
           <div className='sm:flex grid grid-rows-3 grid-flow-col  items-center justify-center sm:justify-between bg-[#FAFAFA]  rounded-[10px] mr-5  ml-5 mb-3  sm:p-4   sm:mb-2 sm:mr-10 sm:pr-10  '>
            <div className='flex ml-2 '>
             <p className='sm:mt-3 font-medium text-11px sm:text-14px md:text-19px   text-[#15245B]  mr-1  '>{Nom} </p>
             <p className=' sm:mt-3  font-medium text-11px sm:text-14px md:text-19px  text-[#15245B]'>{prenom}</p>
             </div>
             <div className=''>
             <p className=' ml-2  sm:mt-3 font-medium text-11px sm:text-14px md:text-19px  text-[#15245B]'>{Email}</p>
             </div>
             <div className="flex mb-2 sm:ml-10">
              <button  className=" p-3  sm:px-7 sm:py-3 bg-[#15245B] text-[#FAFAFA] text-11px sm:text-14px md:text-19px   sm:ml-2 sm:mb-2  mr-1 rounded-full sm:pr-6 sm:pl-6"> Modifier</button>
              <button className=" p-2 sm:px-10 sm:py-2 bg-[#FAFAFA] text-[#15245B] text-11px sm:text-14px md:text-19px  rounded-full border-2 border-[#15245B] sm:pr-4 sm:pl-4 ">Supprimer</button>

             </div>

             </div>
             

      </section>
    )
  }

const text =[
    {
        Nom: "Remil",
        prenom : "Maha",
        Email: "maharemil@gmail.com " ,
        
    },
    {
        Nom: "Remil",
        prenom : "Maha",
        Email: "maharemil@gmail.com " ,
    },
    
    {
        Nom: "Remil",
        prenom : "Maha",
        Email: "maharemil@gmail.com " ,
    },
  
]

function Infocomp() {
    const[currentIndex,setcurrentIndex] = useState(0) ;

    return( 
    <section>
        <div>
            <div className='flex flex-col  w-full h-full  sm:ml-10 sm:pl-10 mb-5 mt-5  sm:mr-10 sm:pr-10 font-signature '>
               {
                   text.map((ptext,index) =>(
                       <Affich {...ptext} currentIndex={currentIndex} key={index} />
                   ))
               }
               <div className='flex  justify-center mt-10 mb-10'>
                <img src={image3} alt="image"  className='mr-10'/>
                <img src={image2} alt="image" className='ml-10 sm:mr-10' />
               </div>
            </div>


        </div>

  </section>)
}

export default  Infocomp ; 