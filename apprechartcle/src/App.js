import Main from './pages/main'
import Login from './pages/login'
import './index.css' ;
import Navbar  from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import  Recharche from './pages/recharche';
import Favoris from './pages/favoris' ;
import Signin from './pages/signin';
import Pageprncpl from './pages/pageprncpl';
import Options from './components/optionrech' ; 


function App() {
  
  return (
    <div className="App">
        
          <Main></Main>
           
      
    </div>
  );
}

export default App;
