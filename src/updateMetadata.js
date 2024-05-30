import React from 'react';
import { Helmet } from 'react-helmet-async';

// Function to update metadata using React Helmet
const Element =  (newDescription) => {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.value); // This will log the Chuck Norris joke
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  return (
    <div>
    <Helmet>
      <meta name="description" content="the new element description" />
    </Helmet>
    <div>Hi How Ah Ya!</div>
    </div>
  );
};

export default Element;