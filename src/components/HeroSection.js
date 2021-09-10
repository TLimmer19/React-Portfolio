import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src="/images/Abasin.jpg"  />
            <h1> Welcome to my Software Developer Portfolio</h1>
            {/* <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >GET STARTED
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >GET STARTED <i className='far fa-play-circle'/>
                </Button>
            </div> */}
        </div>
    )
}

export default HeroSection;
