import './index.css' ;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Search from './pages/search';
import SearchResultPage from './pages/searchResult';
import ResultsPage from './components/Results';
import Navbar from './components/Navbar';
import Navbaradmin from './components/nabvaradmin';
import Signin from './pages/signin';
import Pageprncpl from './pages/pageprncpl';
import Options from './components/optionrech';
import SearchResult from './pages/searchResult';
import ArticleDetails from './pages/articleDetailles'
import EditProfil from './pages/editProfil'
import ProfilSettings from './pages/profileSettings'
import UserAccount from './pages/userAccount'
import Favourites from './components/Favorites';
import Uploadbar from './components/uploadbar' ; 
import Homeadmin from './pages/homeadmin'
import Homemdrtr from './pages/homemdrtr'

const App = () => {
  return (
    <div className="App">
    
        
    <Router>
          <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/userAccount" element={<UserAccount/>} />
      </Routes>
    </Router>
         
      

      
    </div>
  );
};

export default App;
