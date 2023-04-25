import React from "react"
import data from "./data"
import Header from "./Header"
import Card from "./Card"


export default function App(){
    const cardInfo = data.map(info =>
        {return(
            <Card 
            key = {info.key}
            title = {info.title}
            location =  {info.location}
            googleMapsUrl = {info.googleMapsUrl}
            startDate = {info.startDate}
            endDate = {info.endDate}
            description = {info.description}
            imageUrl = {info.imageUrl}
            airbnb = {info.airbnb}
            />   
            )
        }
    )
    return(
        <div>
            <Header/>
            {cardInfo}
        </div>
    )
}