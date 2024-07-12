import React from 'react';
import {Helmet} from "react-helmet-async";
import { useLocation } from 'react-router-dom';
import image1 from './images/Ai-gov.png';
import image2 from './images/Iapp-news.png'
import image3 from './images/american_privacy_rights_act_cheat_sheet_thumbnail.jpg'
import image4 from './images/ftc_enforcement_trends_thumbnail.jpg'
import {
    Menu, MenuButton, MenuList, MenuItem, Button
  } from '@chakra-ui/react';


const Body = () => {
    // const [joke, setJoke] = useState('');
    const location = useLocation();

//   useEffect(() => {
//     fetch('https://api.chucknorris.io/jokes/random')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setJoke(data.value); 
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }, []);
    return (
        <div>
            <Helmet>
                <title>The Body title</title>
        <meta name="description" content="the new Body description" />
      </Helmet>
      <Menu>
        {({ isOpen }) => (
        <>
            <MenuButton isActive={isOpen} as={Button}>A
                {isOpen ? 'Close' : 'Open'}
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Download</MenuItem>
            </MenuList>
        </>
        )}
        </Menu>
      <p>Current Path: {location.pathname}</p>
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