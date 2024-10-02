import React from 'react'
import Header from './components/layouts/Header';

import './index.css'

const links = [
  {name: Home, url: "#"},
  {name: Servicios, url: "#"},
  {name: Acerca, url: "#"},
  {name: Menu, url: "#"},
  {name: Locales, url: "#"},
  {name: Contacto, url: "#"}
];

export const App = () => {
  return (
   <>
    <Header/>
    <h1>Inicio de la App</h1>
    <h2>Contenedor Principal</h2>
   </>
  )
}

export default App;