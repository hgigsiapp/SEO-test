import React from 'react';
import { Helmet } from 'react-helmet-async';



// Function to update metadata using React Helmet
const Element = async (newDescription) => {
  const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://icanhazdadjoke.com/", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  return (
    <div>
    <Helmet>
      <meta name="description" content={result.joke} />
    </Helmet>
    <div>Hi How Ah Ya!</div>
    </div>
  );
};

export default Element;