import './index.css' ;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import SearchPage from './pages/search';
import SearchResultPage from './pages/searchResult';
import ResultsPage from './components/Results';
import Navbar from './components/Navbar';
import Recharche from './pages/recharche';
import Favoris from './pages/favoris';
import Signin from './pages/signin';
import Pageprncpl from './pages/pageprncpl';
import Options from './components/optionrech' ; 
import SearchResult from './pages/searchResult' ;
import ArticleDetailsPage from './pages/articleDetailles';
import Sidebareaccount from './components/accountsidebar'
import UserAccount from './pages/userAccount';
import ProfilSettings from './pages/profileSettings';
import EditProfil from './pages/editProfil'
import ModifierArticle from './pages/modifierArticle';
const App = () => {
  return (
    <div className="App">
          <ModifierArticle/>
    </div>
  );
};

export default App;
