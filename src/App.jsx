import React, { useState } from 'react';
import './App.css'
import Webscrapper from './components/Webscrapper'
import Table from './components/Table';

function App() {
  const [state, setState] = useState(0);

  const handleButtonClick = () => {
    setState(1);
  };

  return (
    <>
    { (state== 0) ? <div className='webscrap'> <Webscrapper onButtonClick={handleButtonClick} /></div>  : <div className='table'><Table/></div> }
    </>
  )
}

export default App
