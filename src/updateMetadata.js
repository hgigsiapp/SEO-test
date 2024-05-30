import React from 'react';
import { Helmet } from 'react-helmet';

// Function to update metadata using React Helmet
const Element = (newDescription) => {
  return (
    <div>
    <Helmet>
      <meta name="description" content={newDescription} />
    </Helmet>
    <div>Hi How Ah Ya!</div>
    </div>
  );
};

export default Element;