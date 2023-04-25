import React from "react"

export default function Card(props){
    return(
        <div className="bigger-container">
            <div className="card-container">
            <img src={props.imageUrl} className="destination-pic"/>
            
            <div className="travel-info">
                <div className="loc-info"> 
                    <i className="fa-solid fa-location-dot" style={{color: "#ec464f",}}></i>
                    <p className = "location-country">{props.location}</p>
                    <a className = "loc-google" href={props.googleMapsUrl}> 
                    View on Google Maps 
                    </a>
                </div>
                <div className="location-airbnb">
                    <h2 className="location">{props.title} </h2>
                    <a href={props.airbnb}>
                    <i className="fa-brands fa-airbnb fa-xl" style={{color: "#ec464f",}}></i>
                    </a>
                </div>
                <p className="dates">{props.startDate} - {props.startDate}</p>
                <p className="loc-description">
                {props.description}
                </p>
            </div>
            </div>
        </div>
        
    )
}

