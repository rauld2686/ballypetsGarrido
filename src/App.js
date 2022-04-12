import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  const handdleOnAdd = ( num ) =>{
    console.log(`Se agregaron ${num}  productos al carrito`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
