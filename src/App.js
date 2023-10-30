import React from 'react';
import './App.css';
import Menu from './components/menu/menu';


function App() {
return (
<div className="App">
  <Menu/>
  <main className="wrapper">
    <section className="section static"></section>
    <section className="section parallax"></section>
    <section className="section static"></section>
    <section className="section parallax"></section>
    <section className="section static"></section>
    <section className="section parallax"></section>
    <section className="section static"></section>
  </main>
</div>
);
}
export default App;
