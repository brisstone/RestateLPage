import React from 'react'
import './testimonialCard.css';
import {AiFillStar} from "react-icons/ai"

export default function TestimonialCard({location, author, image, text}) {
    return (
        <div className="testimonial-card-body">
                <div className='testimonial-card'>
                <div className="testimonial-card-rating">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    
                </div>
                <div className="testimonial-card-text">
                        {text}
                </div>
                <div className="testimonial-card-witness">
                    <div className="testimonial-card-witness-image">
                    <img src={image} alt="" />
                    </div>
                    <div className="testimonial-card-witness-details">
                        <div className="testimonial-card-witness-name">
                            {author}
                        </div>
                        <div className="testimonial-card-witness-location">
                            {location}
                        </div>
                    </div>
                

                </div>
                
            </div>
        </div>
        
    )
}
