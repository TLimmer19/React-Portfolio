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
                        src="images/WW2.png"
                        text="World War II Quiz"
                        label="WW2 Quiz"
                        path="https://tlimmer19.github.io/Quiz-Code/"
                        />
                        <CardItem 
                        src="images/image-stargazer.png"
                        text="Stargazer Nasa API"
                        label="Project 1"
                        path="https://jessamyn27.github.io/Stargazers-App-NASA-API/"
                        />
                        <CardItem 
                        src="images/windows95.png"
                        text="Windows 95 replica"
                        label="Project 2"
                        path="https://windows-95-uta.herokuapp.com/"
                        />
                        <CardItem 
                        src="images/Spuds-and-Duds.png"
                        text="Spuds and Duds"
                        label="Project 3"
                        path="https://spudsandduds.herokuapp.com/"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
