import React, { useEffect } from 'react';
import './App.css';
import Menu from './components/menu/menu';
import Accueil from './components/accueil/accueil';
import Qui from './components/qui/qui';
import Studio from './components/studio/studio';
import Tarifs from './components/tarifs/tarifs';
import Avis from './components/avis/avis';
import Contact from './components/contact/contact';
import Blog from './components/blog/blog';
import Footer from './components/footer/footer';


const App = () => {
  useEffect(()=> {
  });
return (
<div className="App">
  <Menu/>
  <main className="wrapper">
    <Accueil />
    <Qui />
    <Studio />
    <Tarifs />
    <Avis />
    <Blog />
    <Contact />
  </main>
  <Footer></Footer>
</div>
);
}
export default App;
