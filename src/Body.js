import React from 'react';
import aiGovImage from '../public/images/Ai-gov.png';

const Body = () => {
    return (
        <div>
            <h1>My Component</h1>
            <img src={aiGovImage} alt="AI Gov" />
        </div>
    );
}

export default Body;