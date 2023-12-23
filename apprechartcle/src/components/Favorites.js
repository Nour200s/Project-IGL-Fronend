import React, { useState } from "react";
import nfav from './../images/nfav.svg';
import fav from './../images/fav.svg';
function Article({ title, author , keyword , sumup }) {
    const [icon, setIcon] = useState(nfav);

  function changeIcon() {
    setIcon((currentIcon) => (currentIcon === nfav ? fav : nfav));
  }
  return (
    <div className=" cursor-pointer shadow-md p-2 m-2 h-full w-full bg-[#F5F5F5] rounded-2xl md:p-10">
    <h4 className="text-[#15245B] font-poppins text-20px font-medium tracking-wide md:text-30px lg:text-40px  "> {title} </h4>
    <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> Auteur :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px "> {author}</p>
    <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> Mot clé :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> {keyword}</p>
    <h5 className="text-[#15245B] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> Résumé :</h5>
    <p className="text-[#4F5557] font-poppins text-16px font-medium tracking-wide md:text-26px lg:text-30px  "> {sumup}</p>
    <div className="flex items-center space-x-4 p-4">
         <img onClick={changeIcon} src={icon} className="h-6 w-6" alt="" />
        <button  className="bg-[#15245B] text-white px-4 py-2  text-10px rounded-full md:text-16px lg:text-20px">
          Plus de detaille
        </button>
        <button className="bg-[#F5F5F5] border-2 border-solid border-[#15245B] text-[#15245B] text-10px px-4 py-2 rounded-full md:text-16px md:text-20px">
          Voir le PDF 
        </button>
      </div>
    </div>
  );
}

const Articles = [
  {
    title: "Understanding Machine Learning Algorithms",
    author: "John Smith",
    keyword:"Machine Learning, Algorithms, Data Science, Artificial Intelligence",
    sumup:"This article by John Smith provides an insightful overview of various machine learning algorithms commonly used in data science and artificial intelligence" ,
  },
  {
    title: "Understanding Machine Learning Algorithms",
    author: "John Smith",
    keyword:"Machine Learning, Algorithms, Data Science, Artificial Intelligence",
    sumup:"This article by John Smith provides an insightful overview of various machine learning algorithms commonly used in data science and artificial intelligence" ,
  },
  {
    title: "Understanding Machine Learning Algorithms",
    author: "John Smith",
    keyword:"Machine Learning, Algorithms, Data Science, Artificial Intelligence",
    sumup:"This article by John Smith provides an insightful overview of various machine learning algorithms commonly used in data science and artificial intelligence" ,
  },
  {
    title: "Understanding Machine Learning Algorithms",
    author: "John Smith",
    keyword:"Machine Learning, Algorithms, Data Science, Artificial Intelligence",
    sumup:"This article by John Smith provides an insightful overview of various machine learning algorithms commonly used in data science and artificial intelligence" ,
  },
];

function Favourites() {
  return (
    <div className="">
      <h4 className="text-[#15245B] font-poppins font-bold text-30px tracking-wide uppercase m-4 md:text-40px lg:text-50px ">
        Favourites
      </h4>
      <div>
        {Articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
