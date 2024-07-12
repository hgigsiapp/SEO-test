import React, {useState} from 'react';
import {Helmet} from "react-helmet-async";
import { useLocation } from 'react-router-dom';
import image1 from './images/Ai-gov.png';
import image2 from './images/Iapp-news.png'
import image3 from './images/american_privacy_rights_act_cheat_sheet_thumbnail.jpg'
import image4 from './images/ftc_enforcement_trends_thumbnail.jpg'
import {
    Menu, MenuButton, IconButton, Hide, Flex
  } from '@chakra-ui/react';
import MenuListContent from './MenuListContent';


  const data = ["hiddeglnrglkergnelkrgnelkrg", "hikjbergkjbergkjbergkjbergkjberg", "hikjbergk;jergkjergergergergerg", "hiddeglnrglkergnelkrgnelkrg", "hikjbergkjbergkjbergkjbergkjberg", "hikjbergk;jergkjergergergergerg", "hiddeglnrglkergnelkrgnelkrg", "hikjbergkjbergkjbergkjbergkjberg", "hikjbergk;jergkjergergergergerg", "hiddeglnrglkergnelkrgnelkrg", "hikjbergkjbergkjbergkjbergkjberg", "hikjbergk;jergkjergergergergerg", "hiddeglnrglkergnelkrgnelkrg", "hikjbergkjbergkjbergkjbergkjberg", "hikjbergk;jergkjergergergergerg", "hiddeglnrglkergnelkrgnelkrg", "hikjbergkjbergkjbergkjbergkjberg", "hikjbergk;jergkjergergergergerg", "hiddeglnrglkergnelkrgnelkrg", "hikjbergkjbergkjbergkjbergkjberg", "hikjbergk;jergkjergergergergerg"];
const Body = () => {
    // const [joke, setJoke] = useState('');
    const location = useLocation();
    const [defOpen, setOpen] = useState();
    const [back, setBack] = useState(false);
    // const [mobileOpen, setMobileOpen] = useState();

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
      <Menu defaultIsOpen={defOpen}
            onClose={() => {
                setOpen(false);
             }}
    //   onOpen={() => {
    //     setMenuGroup(false);
    //   }}
      eventListeners={{ resize: true, scroll: false }}
      isLazy
      closeOnBlur={false}>
        {({ isOpen }) => (
        <>
            <MenuButton border="5px solid orange"
            as={IconButton}
            size={'lg'}
            // aria-label="Options"

            variant="outline"
            color={'inherit'}
            onClick={() => {
              setOpen(!defOpen);
            }}>A
            
            </MenuButton>
            {!defOpen && (
          <Hide above="lg">
            <Flex flex={1}></Flex>
            <MenuListContent data={data} viewBack={setBack} back={back} />
            </Hide>
        )}
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