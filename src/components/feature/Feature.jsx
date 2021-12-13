import React from 'react';
import './feature.css'
import {AiOutlineSearch} from 'react-icons/ai'

export default function Feature({color, title, text, icon, boxShadow}) {
    // const color= "green";
    return (
        
        <div className='feature'>

            <div className="feature-card">
                    <div className="feature-icon-body" style={{backgroundColor: color, color:"green", boxShadow: boxShadow}}>
                         
                            <img  className='feature-icon' src={icon} alt="search" />
                         
                    </div>
                        
                    
                
                    <div  className='feature-title-content' >
                        <h className='feature-title' >{title}</h>
                    </div>
                    <div className="feature-text-content">
                        <h className='feature-text'>{text}</h>
                    </div>

            </div>
             

        </div>
    )
}
