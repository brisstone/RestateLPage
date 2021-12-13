import React from 'react'
import TestimonialCard from '../../components/testimonialCard/TestimonialCard';
import './testimonial.css'
import {AiOutlineStar} from "react-icons/ai"

export default function Testimonial() {
    return (
        <div className='testimonial section__padding'>
             <div className="testimonial-title">
                    <h1>Loved by businesses, and individuals across the globe.</h1>
             </div>
             <div className="testimonia-card-details">
                 <div className='testimonial-card'>
                    <TestimonialCard
                    location={'Los Angeles, CA'} 
                    author={'Jane Cooper'} 
                    image={'/Image (4).png'} 
                    text={'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.'}
                    />
                 </div>
               
                <div className='testimonial-card'>
                        <TestimonialCard 
                    location={'Los Angeles, CA'} 
                    author={'Jane Cooper'} 
                    image={'/Image (4).png'} 
                    text={'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.'}
                    />
                </div>
              
                
                <div   className="testimonial-card testimonial-card-last">
                    <TestimonialCard
                
                    location={'Los Angeles, CA'} 
                    author={'Jane Cooper'} 
                    image={'/Image (3).png'} 
                    text={'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.'}
                    />
                </div>
            
            </div> 
            <div className="testimonial-company-details">
                <div className="timonial-company-details-logos">
                    <img src="/Logo12.png" alt="logo" />
                </div>
                <div className="timonial-company-details-contact">
                    Give us a Call 1-888-111-2222 and we can set you up, or check our pricing plans
                </div>
            </div>
           
        
        </div>
    )
}
