import React from 'react'
import photo3 from "./../images/image4.png" ;
import Logo from "./../images/logo.png" ;
import Google from './../images/google.png' ; 
import { Link } from 'react-router-dom';
import Clogo from '../components/logo';

function Signin() {
  return (
    <div className=" sm:flex max-h-screen sm:w-full    ">
           
           
           <div className=" sm:flex-wrap sm:w-full  sm:h-full  md:bg-[#c3eefb] sm:justify-center   sm:items-center  ">
           <div className=" pt-10 pl-10 md:pt-2">
           <Clogo/>
          </div>  
            <div className="hidden md:block">
            <img src={photo3} alt=""  className="pb-20 mb-20 ml-10" />
            </div>
           </div>
           
            <div className="w-full h-full bg-[#FAFAFA] font-signature font-extrabold text-24px md:text-40px ml-10 mt-10 sm:ml-20 sm:mt-20  ">
                 
                   <h1 className=" text-[#15245B]  text-24px md:text-30px lg:text-custom ">Bienvenue sur<br /> <span className="text-[#FBBC05]" >Sci</span> <span className="text-[#F57581] ">Topia !</span> </h1>
                    <form>
                        
                        <div className='font-semibold text-16px md:text-25px  text-[#15245B] mt-4'>
                            <label >Nom Utilisateur</label>
                        </div>
                        <div> <input placeholder="Entrer votre nom" className=" w-4/5 rounded-md text-14px md:text-21px  ring-2 ring-[#15245B] mt-2 p-2 text-[#A59E9E] font-normal   focus:outline-none" type="text" /></div>
                        <div className='mt-4'>
                            <label className='font-semibold text-16px md:text-25px text-[#15245B]  ' >E-mail</label>
                        </div>
                        <div> <input placeholder="Entrer votre E-mail" className="w-4/5 rounded-md text-14px md:text-21px ring-2 ring-[#15245B] mt-2 p-2 text-[#A59E9E] font-normal    focus:outline-none" type="text" /></div>
                        <div className='font-semibold text-16px md:text-25px text-[#15245B] mt-4 '>
                            <label >Mot de passe</label>
                        </div>
                        <div><input placeholder="Entrer votre mot de passe" className=" w-4/5 rounded-md  text-14px md:text-21px mt-2 p-2   ring-2 ring-[#15245B] text-[#A59E9E] font-normal  focus:outline-none" type="password" /></div>
                        <div className=" text-[#15245B] py-2 mt-4">
                            <p className=" text-[#A59E9E] font-normal text-14px md:text-21px  "><input className="mr-2   " type="checkbox" />J'accepte les conditions d'utilisation et <br /> la politique de confidentialité</p>
                        </div>
                        <button className="w-4/5 my-3  bg-[#15245B] text-[#FAFAFA] font-semibold rounded-full py-3 px-8 text-16px md:text-21px ">S'inscrire</button>
                      
                    </form>
                      <div className="flex sm:items-center sm:justify-center font-medium text-13px md:text-21px mt-3 sm:w-4/5">
                      <p className=' text-[#263238] mr-1'>Vous avez déjà un compte?</p>
                      <Link to="/login">
                      <button className="text-[#F57581] ">Se connecter</button>
                   </Link>
                      </div>

            </div>
      
    </div>
  )
}

export default Signin