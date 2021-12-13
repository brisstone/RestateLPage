import React from 'react'
import { NavBar } from '../../components'
import Search from '../../components/search/Search'
import './footer.css'

export default function Footer() {
    return (
        <div className='footer section__padding'>
            <div className="footer-heading-primary">
                <h1>Get Our Newsletter</h1>
            </div>
            <div className="footer-heading-secondary">
                <h3>To join the worldwide community</h3>
            </div>
            <div className="search-input1">
                    <input type="text" 
                    className="footer-search"
                    placeholder={'Type your Email Address'}
                    />
                <button>
                    Send now
                </button>

            </div>

            <div className="footer-nav">
                <NavBar/>
            </div>
           

            <div className="footer-copyright">
                <p>Copyright © 2021 AR Shakir . All Rights Reseved.</p>
            </div>
          
        </div>
    )
}
