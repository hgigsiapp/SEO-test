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
