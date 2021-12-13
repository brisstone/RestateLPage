import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Search from '../../components/search/Search'
import './header.css';

import {FaFacebookF} from 'react-icons/fa';
import {AiFillInstagram, AiOutlineArrowRight} from 'react-icons/ai';
import {VscTwitter} from 'react-icons/vsc';
import {FaLinkedin, FaAngleLeft, FaAngleRight} from 'react-icons/fa';







export default function Header() {
    return (
        <div className='header section__padding'>
          
            <Navbar/>
            <div className='header-sub-container'>
                <div className="header-content">
                    <div className="header-content-top">
                           <div className='header-content-sml-heading'>
                        RESIDENTIAL & OFFICE SPACES
                        </div>
                        <div className='header-content-heading'>
                        Smart Living Style
                        for Smart People
                        </div>
                        <div className="header-content-text">
                        Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms.
                        </div>
                        <div className="header-content-input-field">
                            <Search
                            placeholder={"Enter Zipcode to search properties"}
                            />

                        </div>
                    </div>
                     <div className="header-content-btm">
                         <div className="header-logos">
                            <img src='/Logos.png' alt='logos'/>
                        </div>
                     </div>
                        

                </div>
                <div className="header-pictorials">
                    <div className="header-pictorials-lf">

                   
                        <div className="header-image">
                            <img src='/Header Image.png' alt='header'/>
                          
                        </div>
                        <div className="header-arrows">
                        <FaAngleRight/>
                          
                        <span>&nbsp;&nbsp;</span>
                           
                            <FaAngleLeft/>
                        </div>
                    </div>
                    <div className="header-pictorials-rt">
                        <div className="header-social-icons">
                            <FaFacebookF/>
                            <AiFillInstagram/>
                            <VscTwitter/>
                            <FaLinkedin/>

                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
