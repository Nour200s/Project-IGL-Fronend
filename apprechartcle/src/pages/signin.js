import React from 'react'
import photo3 from "./../images/image4.png" ;
import Logo from "./../images/logo.png" ;
import Google from './../images/google.png' ; 
import { Link } from 'react-router-dom';
import Clogo from '../components/logo';
import { useNavigate } from 'react-router-dom';
function Signin() {
  const history = useNavigate() ;
   async function datafetch() {
      const  response = await  fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      mode: "cors", 
      cache: "no-cache",
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify({
        "name" :  document.getElementsByName("name")[0].value , 
        "email" : document.getElementsByName("email")[0].value , 
        "password" : document.getElementsByName("password")[0].value ,
      }), 
    });
    const data =  await response.json();
    if (data["Validation"] == "valid")  history("/login") ; 
    else {
      // affichier l'erreur 
    }
  }
  return (
    <div className=" sm:flex  sm:w-full  sm:max-h-screen    ">
           
           
           <div className=" sm:flex-wrap sm:w-full   sm:h-full  sm:bg-[#c3eefb] sm:justify-center   sm:items-center  ">
           <div className=" pt-10 pl-10 md:pt-2">
           <Clogo/>
          </div>  
            <div className="hidden md:block">
            <img src={photo3} alt=""  className="w-auto h-auto py-5 my-5 ml-10" />
            </div>
           </div>
           
            <div className="w-full h-full bg-[#FAFAFA] font-signature font-extrabold  ml-10 mt-10 sm:ml-20 sm:mt-10  ">
                 
                   <h1 className=" text-[#15245B]  text-24px md:text-40px ">Bienvenue sur<br /> <span className="text-[#FBBC05]" >Sci</span> <span className="text-[#F57581] ">Topia !</span> </h1>
                        <div className='font-semibold text-16px md:text-21px lg:30px text-[#15245B] mt-4'>
                            <label >Nom Utilisateur</label>
                        </div>
                        <div> <input name='name' placeholder="Entrer votre nom" className=" w-4/5 rounded-md text-13px  sm:text-18px md:text-29px  ring-2 ring-[#15245B] p-2 text-[#A59E9E] font-normal   focus:outline-none" type="text" /></div>
                        <div className='mt- 2'>
                            <label className='font-semibold text-16px md:text-21px lg:30px text-[#15245B]  ' >E-mail</label>
                        </div>
                        <div> <input name='email' placeholder="Entrer votre E-mail" className="w-4/5 rounded-md text-13px  sm:text-18px md:text-29px ring-2 ring-[#15245B]  p-2 text-[#A59E9E] font-normal    focus:outline-none" type="text" /></div>
                        <div className='font-semibold text-16px md:text-21px lg:30px text-[#15245B] mt-2 '>
                            <label >Mot de passe</label>
                        </div>
                        <div><input name='password' placeholder="Entrer votre mot de passe" className=" w-4/5 rounded-md  text-13px  sm:text-18px md:text-29px  md:text-21pxmt-2 p-2   ring-2 ring-[#15245B] text-[#A59E9E] font-normal  focus:outline-none" type="password" /></div>
                        <div className=" text-[#15245B] py-2 mt-2">
                            <p className=" text-[#A59E9E] font-normal text-14px sm:text-18px md:text-19px  "><input className="mr-2   " type="checkbox" />J'accepte les conditions d'utilisation et <br /> la politique de confidentialité</p>
                        </div>
                        <button className="w-4/5 my-3  bg-[#15245B] text-[#FAFAFA] font-semibold rounded-full py-3 px-8 text-14px sm:text-19px md:text-21px " onClick={()  =>datafetch()}>S'inscrire</button>
                      
                      <div className="flex sm:items-center sm:justify-center font-medium text-13px sm:text-18px md:text-19px ml-4  mt-3 sm:w-4/5">
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