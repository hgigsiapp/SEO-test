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
    .then((response) =>  response.text())
    .then((result) => console.log(result))

  // console.log("this is the result", result)
  return (
    <div>
    <Helmet>
      <meta name="description" content="the new element description" />
    </Helmet>
    <div>Hi How Ah Ya!</div>
    </div>
  );
  }

export default Element;