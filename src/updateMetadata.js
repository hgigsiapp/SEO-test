import React from 'react';
import { Helmet } from 'react-helmet-async';

// Function to update metadata using React Helmet
const Element = async (newDescription) => {
  const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
		'Content-Type': 'application/json',
		'Accept-Encoding': 'application/gzip'
	},
	body: {
		q: 'English is hard, but detectably so'
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