import React from 'react';
import { NavBar } from './components/NavBar'; 
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <NavBar />
        <ItemListContainer  greeting="B i n e v e n i d o s !"/> 
      </header>
    </>
  );
};

export default App;
