import React from 'react'
import Logo from "./../images/logo.png" ;
import pprofil from "./../images/profil.png" ; 
import image from "./../images/photo.png" ; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=' pb-8 pt-8  bg-[#c3eefb]' >
        
        <div className="  flex justify-between ">
          
                 <div className="text-2xl font-signature">
                    <img src={Logo} alt="logo" className='w-10  ml-8 inline-block items-center  ' />
                    <span className=' text-[#15245B] '>Ci</span>
                    <span className=' text-[#FBBC05] '>Topia</span>
                  </div>
                  <div className='flex justify-start'>
                  <nav className='flex gap-8'>
                          
                                  <Link to="/" className='text-[#15245B]  mt-5 mr-3 '>À propos</Link>
                                  <Link to="/recharche" className='text-[#15245B]  mt-5 mr-3 '>recharche</Link>
                                  <Link to="/favoris" className='text-[#15245B]  mt-5 mr-10 '>Favoris</Link>
                         
                 </nav>
                  <img src={pprofil} alt="pprofil" className='w-10 h-10  mr-10 mt-3 ' />
                  </div>
        </div>
                  
         </div>
   
  )
}

export default Navbar
