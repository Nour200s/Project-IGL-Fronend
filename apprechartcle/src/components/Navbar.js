import React from 'react'
import Logo from "./../images/logo.png" ;
import pprofil from "./../images/profil.png" ; 
import image from "./../images/photo.png" ; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=' flex justify-between pb-8 pt-8  bg-[#c3eefb]  ' >
        
       
          
        <div className="text-40px font-signature  font-semibold ml-10 mt-6">
                   <img src={Logo} alt="logo" className='w-30 inline-block items-center ' />
                    <span className=' text-[#15245B] '>Ci</span>
                    <span className=' text-[#FBBC05] '>Topia</span>
                   </div>
                  <div className='flex justify-start'>
                  <nav className='flex gap-8 font-medium font-signature text-23px'>
                          
                                  <Link to="/" className='text-[#15245B]  mt-5 mr-3 '>À propos</Link>
                                  <Link to="/recharche" className='text-[#15245B]  mt-5 mr-3 '>recharche</Link>
                                  <Link to="/favoris" className='text-[#15245B]  mt-5 mr-10 '>Favoris</Link>
                         
                 </nav>
                  <img src={pprofil} alt="pprofil" className='w-10 h-10  mr-10 mt-3 ' />
                  </div>
        </div>
                  
        
   
  )
}

export default Navbar
