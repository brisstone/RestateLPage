import React from 'react';
import './featureCta.css'

export default function FeatureCta({title, text}) {
    return (
        <div className='feature-cta'>
            <div className="feature-cta-title">
                {title}
            </div>
            <div className="feature-cta-text">
                {text}
            </div>
        </div>
    )
}
