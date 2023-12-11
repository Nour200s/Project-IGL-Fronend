import React, { useState } from "react";
import nfav from './../images/nfav.svg';
import fav from './../images/fav.svg';
function Article({ title, author , keyword , sumup }) {
    const [icon, setIcon] = useState(nfav);

  function changeIcon() {
    setIcon((currentIcon) => (currentIcon === nfav ? fav : nfav));
  }
  return (
    <div className="relative cursor-pointer shadow-md p-2 m-4 h-auto w-auto bg-[#F5F5F5] rounded-2xl p-10">
    <img onClick={changeIcon} src={icon} className="absolute inset-y-0 right-0 p-4 " alt=""/>
    <h4 className="text-blue-800 font-poppins text-xl font-medium tracking-wide uppercase"> {title} </h4>
    <h5 className="text-blue-800 font-poppins text-lg font-normal tracking-wide uppercase"> Auteur :</h5>
    <p className="text-gray-700 font-poppins text-base font-normal tracking-wide "> {author}</p>
    <h5 className="text-blue-800 font-poppins text-lg font-normal tracking-wide uppercase"> Mot clé :</h5>
    <p className="text-gray-700 font-poppins text-base font-normal tracking-wide "> {keyword}</p>
    <h5 className="text-blue-800 font-poppins text-lg font-normal tracking-wide uppercase"> Résumé :</h5>
    <p className="text-gray-700 font-poppins text-base font-normal tracking-wide "> {sumup}</p>
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

function Results() {
  return (
    <div className="p-20">
      <h4 className="text-blue-800 font-poppins text-5xl font-bold tracking-wide uppercase m-4">
        Resultats
      </h4>
      <div>
        {Articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Results;
