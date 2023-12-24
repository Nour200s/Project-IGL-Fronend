import React,{useState, useEffect, useRef } from 'react'
import Logo from "./../images/logo.png" ;
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai' 
import { Link } from 'react-router-dom';
import Clogo from './logo' ;
import {Menu,X} from 'lucide-react' ;

function Navbar() {
  const [nav,setNav]=useState(false) ;
  const handleNav=() =>{
     setNav(!nav)
  }

  const [effetActif, setEffetActif] = useState('Main');
  const handleClic = (element) => {
    setEffetActif((prevEffet) => (prevEffet === element ? null : element));
  };
  const menuRef = useRef();

  const handleCloseNav = (event) => {
    // Vérifier si le clic a eu lieu à l'intérieur du menu
    if (nav && menuRef.current && menuRef.current.contains(event.target)) {
      return;
    }

    // Fermer le menu uniquement si le menu est ouvert
    if (nav) {
      setNav(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Mettre à jour le statut du menu uniquement si la fenêtre est suffisamment grande
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Ajouter un écouteur d'événement pour le clic à l'extérieur du menu
    document.addEventListener('click', handleCloseNav);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleCloseNav);
    };
  }, []);
  return (
    <div className='  bg-[#c3eefb] w-full   ' >
        
       
          <div className=' flex  justify-between pb-8 pt-8'>
                <Clogo/>
               
                  <div className='flex justify-start'>
                     <nav className='hidden md:flex  gap-8 font-medium font-signature text-23px mt-2 '>                           
                          
                                  <Link to="/" className={`text-[#15245B]  mt-5 mr-10  cursor-pointer ${effetActif === 'Main' ? 'border-b-2 border-black' : ''}`} onClick={() => handleClic('Main')}>À propos</Link>
                                  <Link to="/search" className={`text-[#15245B]  mt-5 mr-10  cursor-pointer ${effetActif === 'rech' ? 'border-b-2 border-black' : ''}`} onClick={() => handleClic('rech')}>recherche</Link>
                         
                      </nav>
                  </div>

                  <div className='md:hidden mr-5 ml-10 mt-6'>

                  <button onClick={handleNav}>{nav ? <X/> : <Menu/> }</button>

                  </div>  
                 
                  {
                    nav && (
                      <div ref={menuRef} >
                         <nav className='  flex flex-col basis-full items-center font-medium font-signature text-23px mt-2 pl-10  '>
                          
                         <Link to="/" className={`text-[#15245B]  mt-5 mr-10  cursor-pointer ${effetActif === 'Main' ? 'border-b-2 border-black' : ''}`} onClick={() => handleClic('Main')}>À propos</Link>
                                  <Link to="/search" className={`text-[#15245B]  mt-5 mr-10  cursor-pointer ${effetActif === 'rech' ? 'border-b-2 border-black' : ''}`} onClick={() => handleClic('rech')}>recherche</Link>
                 
                         </nav>
                      </div>
                    )
                  }
             
             </div>  
            
        </div>
                  
        
   
  )
}

export default Navbar