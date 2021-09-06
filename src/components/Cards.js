import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these awesome Projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text=""
                        label=""
                        path="/resume"
                        />
                        <CardItem 
                        src="images/img-9.jpg"
                        text=""
                        label=""
                        path="/contact"
                        />
                        <CardItem 
                        src="images/img-9.jpg"
                        text=""
                        label=""
                        path="/portfolio"
                        />
                        <CardItem 
                        src="images/img-9.jpg"
                        text=""
                        label=""
                        path="/about-me"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
