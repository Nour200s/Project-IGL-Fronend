import React, { useState } from "react";
import fav from './../images/favv.svg';
import setting from './../images/setting.svg';
import edit from './../images/edit.svg';
import deconnecte from './../images/deconnecter.svg';

function Accountsidebar(){
    return( 
        <div className="h-auto w-auto  rounded-xl  bg-[#15245B] p-10 m-6 md:rounded-3xl ">
        <div className="flex items-center space-x-4 ">
            <img src={edit} alt="" className="h-5 w-5"/>
            <p className="text-[#FAFAFA] text-16px md:text-24px lg:text-28px">Edit your profile</p>
        </div>
        <div className="flex items-center space-x-4 ">
            <img src={fav} alt="" className="h-5 w-5"/>
            <p className="text-[#FAFAFA] text-16px md:text-24px lg:text-28px">your favorites </p>
        </div>
        <div className="flex items-center space-x-4 ">
            <img src={setting} alt="" className="h-5 w-5"/>
            <p className="text-[#FAFAFA] text-16px md:text-24px lg:text-28px">Profil Settings </p>
        </div>
        <div className="flex items-center space-x-4 md:mt-60">
            <img src={deconnecte} alt="" className="h-5 w-5"/>
            <p className="text-[#FAFAFA] text-16px md:text-24px lg:text-28px "> LOG OUT </p>
        </div>
    </div>);
}

export default Accountsidebar;