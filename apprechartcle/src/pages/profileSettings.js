import React from "react" ; 

const user = {
    name:"MEOW123",
    email:"Meaox123@gmail.com",
};
function ProfilSettings ({name=user.name,email=user.email}) {

    return(
        <div className="flex w-full justify-center ">
                       <div className="w-auto h-auto flex-col  space-y-4 border-2 rounded-2xl border-solid border-[#15245B] bg-[#FAFAFA]  p-10 m-20">
                       <div className="text-[#15245B] font-poppins text-16px  font-medium md:text-26px ">
                        User Name:
                        </div>
                        <div className="text-[#15245B] rounded-full p-6 bg-[#DDF7FF] font-poppins text-16px border-2 border-solid border-[#15245B] font-medium md:text-26px " > 
                        {name} 
                        </div> 
                        <div className="text-[#15245B] font-poppins text-16px  font-medium md:text-26px ">
                        Email :
                        </div>
                        <div className="text-[#15245B] rounded-full p-6 bg-[#DDF7FF] font-poppins text-16px border-2 border-solid border-[#15245B] font-medium md:text-26px " > 
                        {email} 
                        </div> 
                        <div className="flex items-center space-x-4 p-2 md:p-4">
                        <button  className="bg-[#15245B] text-white px-4 py-2  text-10px rounded-full md:text-16px lg:text-20px">
                         Edit profil
                        </button>
                        <button className="bg-[#F5F5F5] border-2 border-solid border-[#15245B] text-[#15245B] text-10px px-4 py-2 rounded-full md:text-16px md:text-20px">
                         Log out
                        </button>
                        </div>
                       </div>
                              
         </div>


    );
}

export default ProfilSettings;