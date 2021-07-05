import './App.css';


import Navbar from './components/header/navbar';
import Footer from "./components/footer/footer"

import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar/>
          <div className="footerInApp">
            <Footer/>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
