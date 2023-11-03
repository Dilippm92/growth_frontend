import React, { useState } from 'react';
//import axios from 'axios';
import {sendWebsiteURL} from "../api/api"
import "../App.css"
const Webscrapper = ({ onButtonClick }) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value); 
      };
      const handleClick = () => {
        sendWebsiteURL(inputValue)
          .then((response) => {
            console.log(response);
            onButtonClick();
          })
          .catch((error) => {
            // Handle any errors
            console.error(error);
          });
      };
  return (
    <div className='webscrapper'>
      <h1>Webpage Scrapper</h1>
  
      <input
          placeholder='Enter Website URL'
          value={inputValue}
          onChange={handleChange}
        />
      <button onClick={handleClick}>Get Insights</button>

  
     
    </div>
  )
}

export default Webscrapper
