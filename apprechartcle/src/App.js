import './index.css' ;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main';
import LoginPage from './pages/login';
import SearchPage from './pages/search'
import SearchResultPage from './pages/searchResult'
import ResultsPage from './components/Results'

const App = () => {
  return (
    <div className="App">
   <SearchResultPage></SearchResultPage>
    </div>
  );
};

export default App;

