import React from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import RowPost from './components/rowpost/RowPost';
import { originals,action,comedy,horror,romance } from './urls';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title="Netflix Orignals" url={originals}/>
      <RowPost title="Action" isSmall url={action}/>
      <RowPost title="Comedy" isSmall url={comedy}/>
      <RowPost title="Horror" isSmall url={horror}/>
      <RowPost title="Romance" isSmall url={romance}/>
    </div>
  );
}

export default App;
