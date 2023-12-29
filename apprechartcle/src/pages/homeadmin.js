import Uploadbar from './../components/uploadbar'
import Infocomp from '../components/infocomp';

function Homeadmin () {



    return(
        <div className='bg-[#c3eefb] h-full font-signature'>
              <div className=' flex items-center justify-center p-8 lg:p-0 '>
             <Uploadbar></Uploadbar>
             </div>
             <div className='mr-10 ml-10 pr-10 pl-10  '>
             <div className='  bg-[#15245B] mt-10 h-full w-full  font-medium rounded-[10px] mb-10 '>
                <div className='flex items-center sm:justify-end  justify-center'>
                <button className=' mt-7 mr-10 px-10 py-2 bg-[#c3eefb]  text-[#15245B] text-11px sm:text-14px md:text-19px   rounded-full block '>Ajouter</button>
                </div>
                <Infocomp/>
             </div>
             </div>
             <div className=' bg-[#15245B] text-[#FAFAFA] font-normal flex justify-center items-center text-14px   sm:text-19px'>
                <h1>Copyright © 2023 SciTopia  Tous droits réservés.</h1>
             </div>
        </div>
    )
}
export default Homeadmin ; 