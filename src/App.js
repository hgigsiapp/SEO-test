import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
                <title>My Title</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
    </div>
  );
}

export default App;
