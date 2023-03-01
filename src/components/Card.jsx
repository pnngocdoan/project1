import React from "react";

const Card = (props) => {
    return (
        <div className = "card"> 
            <img src={props.image}/>
            <h3 class={props.color}>{props.name}  <i class="fas fa-heart"></i> {props.vote}</h3>
            <button class={props.color}>View Syllabus</button>
            <p class={props.color}>{props.description}</p>
        </div>
    )
}

export default Card;
