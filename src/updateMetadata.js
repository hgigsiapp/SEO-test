import React from 'react';
import { Helmet } from 'react-helmet-async';



// Function to update metadata using React Helmet
const Element = async (newDescription) => {
  const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
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