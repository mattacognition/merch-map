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
          href="https://www.fanatics.com/nfl/nike-jerseys-nike-game/o-3538+br-0717+d-31888956-974542+z-9-2853908761?pageSize=72&sortOption=TopSellers"
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
