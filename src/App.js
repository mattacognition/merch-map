import './App.css';

// import MenuItem from '@mui/material/MenuItem';
import { useRoutes, Link, useQueryParams } from 'raviger';
import Navbar from "./components/Navbar";

// import Rankings from "./components/Rankings";
// import Ramblings from "./components/Ramblings";
// import Rumblings from "./components/Rumblings";

function App() {
  
  return (
    <>
   <Navbar />
    
    <div className="App">
      
      
      <header className="App-header">
        <p>
          Welcome to the Merch Map
        </p>
        <a
          className="App-link"
          href="https://fanatics.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fanatics
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
