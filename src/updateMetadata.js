import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { useLocation } from 'react-router-dom';

const Element = () => {
  const [joke, setJoke] = useState('');
  const location = useLocation();

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setJoke(data.value); 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <meta name="description" content={joke || "the new element description"} />
      </Helmet>
      <p>Current Path: {location.pathname}</p>
      <div>Hi How Ah Ya!</div>
    </div>
  );
};

export default Element;