import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Element from './updateMetadata';
import Body from './Body';
import NoPage from './NoPage';

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
          <meta property="og:url" content="hgigsiapp.github.io/SEO-test/" />
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
        
            <nav>
                <ul>
                    <li>
                        <Link to="/SEO-test/element">Element</Link>
                    </li>
                    <li>
                        <Link to="/SEO-test/body">Body</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/SEO-test/element" element={<Element />} />
                <Route path="/SEO-test/body" element={<Body />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
      </div>
      </HelmetProvider>
  );
}

export default App;
