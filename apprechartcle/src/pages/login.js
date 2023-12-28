import React from "react" ; 
import Logo from "./../images/logo.png" ;
import photo2 from "./../images/photo2.png" ;
import Google from './../images/google.png' ; 
import { Link } from 'react-router-dom';
import Clogo from '../components/logo';

function Login () {

    return(
        <div className="md:flex md:w-full   md:mb-10   ">
           
            <div className=" sm:flex-wrap  sm:w-full sm:h-full sm:bg-[#c3eefb] sm:justify-center sm:items-center  ">
                <div className="pt-10 pl-10 md:pt-2">
                <Clogo/>
                 </div>  
                   <div className="hidden sm:block">
                   <img src={photo2} alt=""  className="py-20 my-10 ml-10 " />
                   </div>
            </div>
            <div className=" flex flex-col w-full h-full bg-[#FAFAFA] font-signature  font-extrabold mb-10 ml-10 mt-10 sm:ml-20 sm:mt-20 ">
                 
                   <h1 className=" text-[#15245B] text-24px md:text-40px  ">Bienvenue de nouveau sur<br /> <span className="text-[#FBBC05]" >Sci</span> <span className="text-[#F57581] ">Topia !</span> </h1>
                    <form>
                        
                        <div className="font-semibold text-16px md:text-25px text-[#15245B] mt-4 ">
                            <label >Nom Utilisateur</label>
                        </div>
                        <div>
                        <input placeholder="Entrer votre nom" className="w-4/5 rounded-md px-2 py-2 ring-2 ring-[#15245B] text-14px md:text-21px  mt-2  font-normal  focus:outline-none" type="text" />
                        </div>
                        <div className="font-semibold text-16px md:text-25px text-[#15245B] mt-2">
                            <label >Mot de passe</label>
                        </div>
                        <div><input placeholder="Entrer votre mot de passe" className=" w-4/5 rounded-md text-14px md:text-21px   mt-2 p-2   ring-2 ring-[#15245B] font-normal focus:outline-none" type="password" /></div>
                        <div className=" text-[#15245B] mb-3 mt-4">
                            <input type="checkbox" id="remember" />
                            <label for="remember" className=" text-[#A59E9E] font-normal mr-4"> <a href="">Mot de passe oublié</a></label>
                        </div>
                        <div className="flex flex-col text-21px ">
                        <button className="w-4/5 my-3  bg-[#15245B] text-[#FAFAFA] font-semibold rounded-full py-2 pr-8 pl-8 text-16px md:text-21px">Se connecter</button>
                         
                        </div>
                    </form>
                    <div className="flex sm:items-center sm:justify-center font-signature font-medium text-13px sm:text-21px mt-3 sm:w-4/5">
                      <p className="text-[#263238] mr-1">Vous n'avez pas de compte ?</p>
                      <Link to="/signin">
                      <button className="text-[#F57581] ">S'inscrire</button>
                  </Link>
                      </div>

            </div>
         </div>


    );
}

export default Login ;