import React, {Fragment} from 'react';
import './features.css'
import {AiOutlineSearch} from 'react-icons/ai'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";


import { MdAgriculture } from 'react-icons/md';
import Residential from '../../components/residential/Residential';
import Commercial from '../../components/commercial/Commercial';
import Agriculture from '../../components/agriculture/Agriculture';
import Industrial from '../../components/industrial/Industrial';

export default function Features({color, title, text, icon}) {
    // const color= "green";
    return (
        
        <div className='features section__padding'>
            <div className="features-heading">
                <div className="feature-heading-title">
                    <h1>Best Real Estate Deals</h1>
                </div>
                <div>
                    <button className='features-buttton'>
                        View All Property
                    </button>
                </div>
            </div>
            <div className="feature-heading-text">
                <h>
                Colonel gravity get thought fat smiling add but. Wonder twenty hunted and put income set desire expect.
                </h>
            </div>



            <Router className="features-routes">
            <Fragment>
        <div >
            <nav className='features-routes-links'>
            <ul className='features-links'>
                <h  className='feat-link'>
                <Link className='features-link first' to="/residential">Residential Property</Link>
                </h>
                <h>
                <Link className='features-link' to="/commercial">Commercial Property</Link>
                </h>
                <h>
                <Link className='features-link' to="/agriculture">Agriculture Property</Link>
                </h>
                <h>
                <Link className='features-link' to="/industrial">Industrial Property</Link>
                </h>
            </ul>
            </nav>

            <div className=''>
            <Routes className="feature-pages" >
            {/* <Route  exact path='/'>
                
               <Navigate to="/residential" /> 
              
            </Route> */}
           
                <Route  exact path="/" element={<Navigate to ="/residential" />}/>
                <Route exact path='/residential' element={<Residential/>}/>
                <Route exact path='/commercial' element={<Commercial/>}/>
                <Route exact path='/agriculture' element={<Agriculture/>}/>
                <Route exact path='/industrial' element={<Industrial/>}/>
           
            
            </Routes>
            </div>
        </div>
        </Fragment>
        </Router> 

        
             

        </div>
    )
}
