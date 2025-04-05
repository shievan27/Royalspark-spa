
import './App.css';

import {BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import FAQ from "./pages/FAQ";
import Login from './buttons/login';
import Signup from './buttons/signup';
import Footer from './components/footer';
import Booking from "./buttons/booking";

function App() {  
  return (
    <Router>
       <div>
        <nav className="navbar">
        <img src = "/logo.png" alt = "logo" className="logo" />
           <div className="nav-links">  
        <Link to="/">Home</Link><Link to="/about">About</Link><Link to ="/contact">Contact</Link><Link to="/services">Services</Link><Link to="/FAQ">FAQ</Link>
        </div>  
        <div className="nav-buttons">
          <Login/>
          <Signup/>
          </div>     
          </nav>
        </div>
<Routes>
  <Route path= "/" element={<Home/>} />
  
  <Route path= "/about" element={<About/>} />
  <Route path= "/contact" element={<Contact/>} />
  <Route path= "/services" element={<Services/>} />
  <Route path= "/FAQ" element={<FAQ/>} />
  <Route path="/booking"  element={<Booking/>}/>
  </Routes>
  <Footer/>
    </Router>
  );
    
}

export default App;
