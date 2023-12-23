import React from "react" ; 
import Logo from "./../images/logo.png" ;
import photo2 from "./../images/photo2.png" ;
import Google from './../images/google.png' ; 

function Login () {

    return(
        <div className="flex w-full  mb-10   ">
           
            <div className=" flex-wrap  w-full h-full bg-[#c3eefb] justify-center items-center md:flex-row md:space-x-6  md:space-y-0  ">
            <div className="text-40px mb-10 font-signature font-semibold ml-10 mt-6">
                   <img src={Logo} alt="logo" className='w-30 inline-block items-center ' />
                    <span className=' text-[#15245B] '>Ci</span>
                    <span className=' text-[#FBBC05] '>Topia</span>
                   </div>
                   <div className="hidden sm:block">
                   <img src={photo2} alt=""  className="pt-20 mt-10" />
                   </div>
            </div>
            <div className="w-full h-full bg-[#FAFAFA] font-signature font-extrabold mb-10 ml-20 mt-20">
                 
                   <h1 className=" text-[#15245B] text-custom ">Welcome back To <br /> <span className="text-[#FBBC05]" >Sci</span> <span className="text-[#F57581] ">Topia !</span> </h1>
                    <form>
                        
                        <div className="font-semibold text-28px text-[#15245B] ">
                            <label >Nom Utilisateur</label>
                        </div>
                        <div> <input placeholder="Entrer votre nom" className="rounded-lg ring-1 ring-[#15245B] mt-2 p-2  font-normal  focus:outline-none" type="text" /></div>
                        <div className="font-semibold text-28px text-[#15245B]">
                            <label >Mot de passe</label>
                        </div>
                        <div><input placeholder="Entrer votre mot de passe" className="rounded-lg  mt-2 p-2   ring-1 ring-[#15245B] font-normal focus:outline-none" type="password" /></div>
                        <div className=" text-[#15245B] py-2">
                            <input type="checkbox" id="remember" />
                            <label for="remember" className="mr-4"> <a href="">Mot de passe oublié</a></label>
                        </div>
                        <button className="w-full my-5 py-2  bg-[#15245B] text-[#FAFAFA] font-semibold rounded-full pt-4 pb-4 pr-8 pl-8">Se connecter</button>
                         <p className="text-center font-semibold text-25px ">OU</p>
                        <button className="w-full my-2 py-2  bg-[#FAFAFA]  text-[#15245B] font-semibold rounded-full pr-8 pl-8 flex items-center justify-center  border-2 border-[#15245B]">Continuer avec Google<img src={Google} alt="google"  className="w-8 h-8" /></button>
                    </form>
                    <div className="flex items-center justify-center">
                      <p>Vous n'avez pas de compte ?</p>
                      <button className="text-[#F57581] ">S'inscrire</button>
                      </div>

            </div>
         </div>


    );
}

export default Login ;