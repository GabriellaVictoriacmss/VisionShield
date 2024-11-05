import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoHome from '../assets/logo-header.png';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent text-white w-full top-0 left-0 z-50 pt-2">
      <div className="flex items-center justify-center p-4">
        <NavLink to="/" className="image-animation mr-24">
          <img 
            src={logoHome} 
            alt="Logo Home" 
            className="h-16 w-16 transition-transform duration-300 ease-in-out transform hover:scale-105" 
            style={{ height: '55px', width: '60px' }} 
          />
        </NavLink>
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 font-montserrat gap-8">
            <li>
              <NavLink
                to="/equipamentos"
                className={({ isActive }) => 
                  `underline-animation text-20px uppercase hover:text-hover-text-color ${isActive ? 'active' : ''}`
                }
              >
                Equipamentos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bibliografias"
                className={({ isActive }) => 
                  `underline-animation text-20px uppercase hover:text-hover-text-color ${isActive ? 'active' : ''}`
                }
              >
                Bibliografias
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/modo-de-uso"
                className={({ isActive }) => 
                  `underline-animation text-20px uppercase hover:text-hover-text-color ${isActive ? 'active' : ''}`
                }
              >
                Modo de Uso
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/integrantes"
                className={({ isActive }) => 
                  `underline-animation text-20px uppercase hover:text-hover-text-color ${isActive ? 'active' : ''}`
                }
              >
                Integrantes
              </NavLink>
            </li>
          </ul>
        </div>

        <button 
          className="text-white focus:outline-none md:hidden ml-auto" 
          onClick={toggleMenu}
        >
          <IonIcon icon={isOpen ? closeOutline : menuOutline} className="w-6 h-6" />
        </button>
      </div>
      
      <div
        className={`fixed inset-y-0 right-0 w-[70%] text-white p-8 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          background: 'linear-gradient(to bottom, #000000, #8F00FF)', 
          zIndex: 50 
        }}
      >
        <button 
          className="absolute top-4 right-4 text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          <IonIcon icon={closeOutline} className="w-6 h-6" />
        </button>
        <NavLink to="/" className="mb-4">
          <img 
            src={logoHome} 
            alt="Logo Home" 
            className="h-16 w-16 transition-transform duration-300 ease-in-out transform" 
            style={{ height: '55px', width: '60px' }} 
          />
        </NavLink>
        <ul className="flex flex-col space-y-8 text-center font-montserrat">
          <li>
            <NavLink
              to="/equipamentos"
              className={({ isActive }) => 
                `underline-animation text-20px uppercase hover:text-hover-text-color ${isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Equipamentos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bibliografias"
              className={({ isActive }) => 
                `underline-animation text-20px uppercase hover:text-hover-text-color ${isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Bibliografias
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/modo-de-uso"
              className={({ isActive }) => 
                `underline-animation text-20px uppercase hover:text-hover-text-color ${isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Modo de Uso
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/integrantes"
              className={({ isActive }) => 
                `underline-animation text-20px uppercase hover:text-hover-text-color ${isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Integrantes
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
