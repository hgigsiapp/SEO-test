import logo from './logo.svg';
import './App.css';
import Element from './updateMetadata'
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
                <title>My Title</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Element newDescription="New description for my page that I am getting from Element" />
    </div>
  );
}

export default App;
