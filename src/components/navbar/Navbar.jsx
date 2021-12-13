import React from 'react'
import './navbar.css';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { MdClose } from "react-icons/md";


const Menu = ()=>{
    return(
    <>
                    <p><a className='navv-link' style={{textDecoration: 'underline'}} href="#home">Home</a></p>
                    <p><a className='navv-link'href="#About">About</a></p>
                    <p><a className='navv-link'href="#Service">Service</a></p>
                    <p><a className='navv-link'href="#Portfolio">Portfolio</a></p>
                    <p><a className='navv-link'href="#Blog">Blog</a></p>
                    <p><a className='navv-link'href="#Contact">Contact</a></p>
    
    </>
    )
}

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='navbar'>
            <div className="navbar-links"> 
                <div className="navbar_logo">
                    <img src="/Logo.png" alt = "logo"/>
                </div>
                <div className="navbar-links-container">
                   <Menu/>
                </div>

                <div className="navbar-menu">
                   
                    {toggleMenu
                    ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />
                    }

                    {toggleMenu && (
                            <div className="navbar-menu_container scale-up-center">
                                <div className="navbar-menu-container-links">
                                <Menu/>
                                </div>
                            </div>
                    )}
                    
                    
                    </div>
                </div>

            
        </div>
    )
}
