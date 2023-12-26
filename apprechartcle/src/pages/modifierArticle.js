import React, { useState } from "react";
import nfav from './../images/nfav.svg';
import fav from './../images/fav.svg';
import articlicone from './../images/article.svg'
import SearchBar from "./../components/searchbar" ;

const Article = {
    title: "Understanding Machine Learning Algorithms",
    author: "John Smith",
    institutions :"Ecole superieur d'informatique",
    keyword:"Machine Learning, Algorithms, Data Science, Artificial Intelligence",
    références:"",
    sumup:"This article by John Smith provides an insightful overview of various machine learning algorithms commonly used in data science and artificial intelligence" ,
    date:"12/12/2023",
    details:"Le machine learning, ou apprentissage automatique, est une branche de l'intelligence artificielle qui révolutionne de nombreux domaines. Il permet aux ordinateurs d'apprendre et de s'améliorer à partir de données, sans être explicitement programmés pour chaque tâche. Ce champ d'étude repose sur des algorithmes et des modèles qui permettent aux machines de détecter des modèles dans les données et de prendre des décisions intelligentes en se basant sur ces modèles. Les Types de Machine Learning 1. Apprentissage Supervisé :Ce type implique des données étiquetées, où l'algorithme apprend à prédire des résultats basés sur des exemples fournis. Par exemple, la classification d'emails en spam ou non spam.                                                     2. Apprentissage Non Supervisé :Les données non étiquetées sont utilisées ici. L'algorithme trouve des structures et des modèles par lui-même. Un exemple est la segmenta                                           afficher plus...."
}
function ModifierArticle({ title=Article.title, author=Article.author ,institutions=Article.institutions, keyword=Article.keyword , reference=Article.références, sumup=Article.sumup, date=Article.date ,details=Article.details}) {
    const [icon, setIcon] = useState(nfav);

    function changeIcon() {
      setIcon((currentIcon) => (currentIcon === nfav ? fav : nfav));
    }

    return (
      <div className=" w-ful h-full bg-[#FFFFFF]  top-0 left-0 right-0 ">
    <div className=" relative cursor-pointer shadow-md p-2 m-2 h-auto w-auto bg-[#F5F5F5] rounded-2xl md:p-6 md:m-20">
     <div className="flex justify-items">
        <img src={articlicone} alt=""  className="w-16 h-16 "/>   
        <h4 className="text-[#15245B] font-poppins text-20px  underline font-medium tracking-wide ml-4 md:ml-8 md:text-30px lg:text-40px  "> {title} </h4>
    </div>
    <div>
    <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> Auteur :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px "> {author}</p>
    </div>
     <div>
     <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> institutions :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px "> {institutions }</p>
    </div>
   <div>
   <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> Mot clé :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> {keyword}</p>
   </div>
<div>
<h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> références Bibliographiques :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px "> {reference}</p>
</div>
    <div>
    <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> Résumé :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> {sumup}</p>
    </div>
   <div>
   <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> Publie le:</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> {date}</p>
   </div>
    
    </div>
    <div className="relative cursor-pointer shadow-md p-2 m-2 h-auto w-auto bg-[#F5F5F5] text-[#37474F] text-16px md:text-26px lg:text-30px rounded-2xl md:p-10 md:m-20">
         {details}
    </div>
      </div>
    );
  }
  export default ModifierArticle;