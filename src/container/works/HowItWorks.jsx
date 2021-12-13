import React from 'react'
import Feature from '../../components/feature/Feature';
import './howItWorks.css'

export default function HowItWorks() {
    return (
        <div className='works'>
            <div className="works-title">
                <h1>How it works?</h1>
            </div>
        

            <div className='works-content section__padding'>

                <Feature className='feature' 
                text={"Wonder twenty hunted and put income set desire expect. Am cottage calling."} 
                title={'Research Suburbs'} 
                color={'#9672FF'} 
                icon='/Icon.png'
                boxShadow={'2px 35px 45px 23px rgba(219,203,219,0.27)'}
                />

                <Feature className='feature' 
                text={"Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight."} 
                title={'Instant Valuation'} 
                color={'#4DDFFD'} 
                icon='/Icon (1).png'
                boxShadow={'2px 35px 45px 23px rgba(199,230,227,0.27)'}
                color={'#4DDFFD'}
                />

                <Feature className='feature' 
                text={"Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible."} 
                title={'Track Property'} 
                color={'#F2B8EC'} 
                icon='/Icon (2).png'
                boxShadow={'2px 35px 45px 23px rgba(214,183,201,0.27)'}
                />


            </div>
        
        </div>
    )
}
