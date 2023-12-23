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
<<<<<<< HEAD
import Options from './components/optionrech' ; 
import SearchResult from './pages/searchResult' ;
import ArticleDetailsPage from './pages/articleDetailles';
import Sidebareaccount from './components/accountsidebar'
import UserAccount from './pages/userAccount';
import ProfilSettings from './pages/profileSettings';
import EditProfil from './pages/editProfil'
const App = () => {
  return (
    <div className="App">
          <ArticleDetailsPage/>
=======
import Options from './components/optionrech';
import SearchResult from './pages/searchResult';

const App = () => {
  return (
    <div className="App">
         <Router>
          <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/recharche" element={<Recharche/>} />
        <Route path="/favoris" element={<Favoris/>} />
      </Routes>
    </Router>

          <Main></Main>

      
>>>>>>> 3e370194d7cf25ce2ccba3436355cf29c370b2b4
    </div>
  );
};

export default App;
