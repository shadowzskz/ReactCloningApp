import React from 'react';
import Card from './Card';
import './CardList-style.css'; 
 
const CardList = (props) => {
    return(
        <>
        <div className="card_list">
            {props.monsters.map(monster => (
                    <Card key ={monster.id} monster = {monster} />
                ))}
        </div>  
        </>
    )
}

export default CardList;