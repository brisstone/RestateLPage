import logo from './logo.svg';
import './App.css';


import { NavBar } from './components/index';
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './container/testimonial/Testimonial';
import Services from './container/services/Services';
import Blog from './components/testimonialCard/TestimonialCard';
import Header from './container/header/Header';
import EstateDeals from './container/footer/Footer';
import HowItWorks from './container/works/HowItWorks';
import Features from './container/features/Features';
import Testimonial from './container/testimonial/Testimonial';
import Footer from './container/footer/Footer';

function App() {
  return (
    <div className="App">
       

      <Header/>
      <HowItWorks/>
      <Features/>
      <Services/>
      <Testimonial/>
      <Footer/>
      {/* <EstateDeals/> */}
      {/* <About/> */}

         {/* <Router>
          <Fragment>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

     
        <Routes>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/Service ' element={<Service />}/>
        <Route exact path='/Blog' element={<Blog/>}/>
      
         
          
        </Routes>
      </div>
      </Fragment>
    </Router> */}
      
    
    </div>
  );
}

export default App;
