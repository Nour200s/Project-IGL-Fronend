import Main from './pages/main'
import Login from './pages/login'
import './index.css' ;
import Navbar  from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Recharche from './pages/recharche';
import Favoris from './pages/favoris' ;


function App() {
  
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
    </div>
  );
}

export default App;
