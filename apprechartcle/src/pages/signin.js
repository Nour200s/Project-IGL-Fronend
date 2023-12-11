import React from 'react'
import photo3 from "./../images/image4.png" ;
import Logo from "./../images/logo.png" ;
import Google from './../images/google.png' ; 

function Signin() {
  return (
    <div className="flex w-full   ">
           
            <div className=" flex-wrap w-full h-full bg-[#c3eefb] justify-center items-center md:flex-row md:space-x-6  md:space-y-0  ">
                   <div className="text-4xl font-signature mt-2 ">
                   <img src={Logo} alt="logo" className='w-25 inline-block items-center' />
                    <span className=' text-[#15245B] '>Ci</span>
                    <span className=' text-[#FBBC05] '>Topia</span>
                   </div>
                   <div className="hidden sm:block">
                   <img src={photo3} alt=""  className="ml-20 mt-6" />
                   </div>
            </div>
            <div className="w-full h-full bg-[#FAFAFA] font-signature ml-20 mt-20 ">
                 
                   <h1 className=" text-[#15245B] font-signature text-4xl ">Welcome back To <br /> <span className="text-[#FBBC05]" >Sci</span> <span className="text-[#F57581] ">Topia !</span> </h1>
                    <form>
                        
                        <div>
                            <label >User Name</label>
                        </div>
                        <div> <input placeholder="Enter Your User Name" className="rounded-lg ring-1 ring-[#15245B] mt-2 p-2   focus:outline-none" type="text" /></div>
                        <div>
                            <label >E-mail</label>
                        </div>
                        <div> <input placeholder="Enter Your E-mail" className="rounded-lg ring-1 ring-[#15245B] mt-2 p-2   focus:outline-none" type="text" /></div>
                        <div>
                            <label >Password</label>
                        </div>
                        <div><input placeholder="Enter Your Password" className="rounded-lg  mt-2 p-2   ring-1 ring-[#15245B]  focus:outline-none" type="password" /></div>
                        <div className="flex justify-between text-[#15245B] py-2">
                            <p className="flex items-center"><input className="mr-2" type="checkbox" />I agree to the Terms of services and privacy policy</p>
                        </div>
                        <button className="w-full my-5 py-2  bg-[#15245B] text-[#FAFAFA] rounded-full pr-8 pl-8">Sign In</button>
                        <button className="w-full my-5 py-2  bg-[#FAFAFA]  text-[#15245B] rounded-full pr-8 pl-8 flex items-center justify-center rounded-full border-2 border-[#15245B]">continue with Google <img src={Google} alt="google"  className="w-8 h-8" /></button>
                    </form>
                      <div className="flex items-center justify-center">
                      <p>Already have an account?</p>
                      <button className="text-[#F57581] ">Log In</button>
                      </div>

            </div>
      
    </div>
  )
}

export default Signin
