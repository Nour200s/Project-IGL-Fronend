import Infosidebar from "../components/infosidbar";
import Accountsidebar from "../components/accountsidebar";


function Userinfo () {



    return(
        <div className='bg-[#c3eefb] min-h-screen font-signature'>
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-0  ">
                  <div className=" w-3/4 p-4 ">
                  <Accountsidebar/>
                 </div>
                 <div className="  p-10 m-6 sm:m-0 sm:mr-10 sm:p-0">
                 <Infosidebar/>
                 </div>
                 
              </div>
              <div className='flex items-center sm:justify-end  justify-center'>
                <button className=' mt-3 mb-5 mr-10 px-10 py-2 bg-[#15245B]  text-[#c3eefb] text-11px sm:text-14px md:text-19px   rounded-full block '>Save</button>
                </div>
       
              <div className='p-2 bg-[#15245B] text-[#FAFAFA] font-normal flex justify-center items-center text-14px   sm:text-19px'>
                <h1>Copyright © 2023 SciTopia  Tous droits réservés.</h1>
             </div>
        </div>
    )
}
export default Userinfo ; 