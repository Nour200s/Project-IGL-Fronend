import './index.css' ;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main';
import LoginPage from './pages/login';
import SearchPage from './pages/search'
import SearchResultPage from './pages/searchResult'
import ResultsPage from './components/Results'
import Navbar  from './components/Navbar';
import  Recharche from './pages/recharche';
import Favoris from './pages/favoris' ;
import Signin from './pages/signin';
import Pageprncpl from './pages/pageprncpl';
import Options from './components/optionrech' ; 


const App = () => {
  return (
    <div className="App">
        
          <Main></Main>
           
      
    </div>
  );
};

export default App;

