import React from "react"

export default function Card(props) {
    let statusText
    if (props.openSpots === 0){
        statusText = "SOLD OUT"
    } else if (props.location === "Online"){
        statusText = "ONLINE"
    }

    return (
    <div className="card">
        <img src={`../images/${props.image}`} className="card--image" />
        {statusText && <h1 className="card--status">{statusText}</h1>}
        <div className="card--stats">
            <img src="./images/star-image.png" className="card--star" />
            <span className="card--rating">{props.stats.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
    </div>
    )
}
