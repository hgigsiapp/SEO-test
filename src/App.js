import logo from './logo.svg';
import './App.css';
import Element from './updateMetadata'
// import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
    <div className="App">
      <Helmet>
                <title>My Title</title>
                <meta name="description" content="Helmet application" />
                <meta property="og:title" content="Facebook Friendly title" />
                <meta property="og:description" content="hi facebook" />
            </Helmet>
            <Element />
    </div>
    </HelmetProvider>
  );
}
// ReactDOM.hydrate(
//   app,
//   document.getElementById(‘app’)
// );
export default App;
