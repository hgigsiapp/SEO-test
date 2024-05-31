import logo from './logo.svg';
import './App.css';
import Element from './updateMetadata'
import Body from './Body'

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
        <meta
        property="og:url"
        content="hgigsiapp.github.io/SEO-test/"
      />
      <meta property="twitter:title" content="twitter Friendly title" />
        <meta property="twitter:description" content="hi twitter" />
        <meta
        property="twitter:url"
        content="hgigsiapp.github.io/SEO-test/"
      />
      </Helmet>
      <Element />
      <Body />
    </div>
    </HelmetProvider>
  );
}

export default App;
