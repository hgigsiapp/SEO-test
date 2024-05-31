import React from 'react';
import image1 from './images/Ai-gov.png';
import image2 from './images/Iapp-news.png'
import image3 from './images/american_privacy_rights_act_cheat_sheet_thumbnail.jpg'
import image4 from './images/ftc_enforcement_trends_thumbnail.jpg'

const Body = () => {
    return (
        <div>
            <p>Hello</p>
            <img src={image1} alt="AI Gov" />
            <p>Hola</p>
            <img src={image2} alt="AI Gov" />
            <p>Bonjour</p>
            <img src={image3} alt="AI Gov" />
            <p>Ciao</p>
            <img src={image4} alt="AI Gov" />
        </div>
    );
}

export default Body;