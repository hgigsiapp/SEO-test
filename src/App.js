import logo from './logo.svg';
import './App.css';
import Element from './updateMetadata'
import Body from './Body'

import {Helmet} from "react-helmet";

function App() {
  return (
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
      <meta
        property="og:image"
        content="https://hgigsiapp.github.io/SEO-test/images/Ai-gov.png"
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
  );
}

export default App;
