


function Infosidebar(){



    return(
        <div className="bg-[#15245B] mt-3 sm:mt-10 h-auto w-full  font-signature   rounded-xl md:rounded-3xl mb-5">
            <form >
                <div className="ml-10 pt-10">
                <label className=" text-[#FAFAFA] font-medium text-14px sm:text-19px md:text-21px  ">Nom utilisateur</label>
                </div>
                <div> <input placeholder="Nour rahal" className="  text-11px sm:text-19px md:text-21px ring-2 ring-[#15245B] ml-10 mr-10 mt-2 p-2  text-[#000000] font-normal   focus:outline-none rounded-[20px]" type="text" /></div>
                <div className="ml-10 pt-5">
                <label className=" text-[#FAFAFA] font-medium text-14px sm:text-19px md:text-21px  ">Email</label>
                </div>
                <div> <input placeholder="lm_remil@esi.dz" className=" text-11px sm:text-19px md:text-21px  ring-2 ring-[#15245B] ml-10 mr-10 mt-2 p-2 text-[#000000] font-normal   focus:outline-none rounded-[20px]" type="text" /></div>
                <div className="ml-10 pt-5">
                <label className=" text-[#FAFAFA] font-medium text-14px sm:text-19px md:text-21px  ">Ancien Mot de Passe</label>
                </div>
                <div> <input placeholder="********************" className=" text-11px sm:text-19px md:text-21px  ring-2 ring-[#15245B] ml-10 mr-10 mt-2 p-2 text-[#000000] font-normal   focus:outline-none rounded-[20px]" type="text" /></div>
                <div className="ml-10 pt-5 ">
                <label className=" text-[#FAFAFA] font-medium text-14px sm:text-19px md:text-21px  ">Nouveau Mot de Passe</label>
                </div>
                <div> <input placeholder="********************" className=" text-11px sm:text-19px md:text-21px  ring-2 ring-[#15245B] ml-10 mb-10 mr-10 mt-2 p-2 text-[#000000] font-normal   focus:outline-none rounded-[20px]" type="text" /></div>
            </form>
        </div>
    )
}

export default Infosidebar ; 