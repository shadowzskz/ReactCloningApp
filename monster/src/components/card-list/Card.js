import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <>
            <div className="card_container">
                <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="fromApi"/>
                <h1>{props.monster.name}</h1>
                <h2>{props.monster.email}</h2>
            </div>
        </>        
    )
};

export default Card;
