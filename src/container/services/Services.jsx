import React from 'react'
import Feature from '../../components/feature/Feature';
import FeatureCta from '../../components/feature_cta/FeatureCta';
import './services.css'

export default function Services() {
    return (
      <div className='services section__padding'>
            <div className="service-title">
                <h1>Featured Listing of the Week</h1>
            </div>
        

        <div className='services-content'>
            <div className="services-pictorials">
                <div className="services-pictorial-estate1">
                    <img src="/Image.png" alt="estate" />
                </div>
                <div className="services-pictorial-estate2">
                <img src="/Image (1).png" alt="estate" />
                </div>

            </div>
            <div className="services-mask">
                <div className="services-mask-title">
                    <h1>The and collecting for the motionless difficulty son.</h1>
                </div>
                <div className="services-mask-text">
                    <h>Conveying or northward offending admitting </h>
                    <h>perfectly my. Colonel gravity get thought fat</h>
                    <h> smiling add but difficult situations.</h>
                </div>
                <div className="services-mask-cta">
                    <FeatureCta
                    title={'Budget'}
                    text={'Confidential'}
                    />

                    <FeatureCta
                    title={'Size'}
                    text={'1200 m2'}
                    />
                    
                    <FeatureCta
                    title={'Type'}
                    text={'Office'}
                    /> 

                    <FeatureCta
                    title={'Status'}
                    text={'Done'}
                    /> 

                    <FeatureCta
                    title={'Location'}
                    text={'Switzerland'}
                    /> 

                    <FeatureCta
                    title={'Flat'}
                    text={'8 Room'}
                    /> 

                   
                    
                </div>
                <div className="services-mask-btn">
                   <button>
                   YES! I WANT BOOK “OFFICE PACKAGE”
                   </button>
                </div>
            </div>


        </div>
        
        </div>
    )
}
