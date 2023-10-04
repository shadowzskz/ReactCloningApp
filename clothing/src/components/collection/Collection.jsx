import React from 'react';
import './Collection.scss';

const Collection = (props) => (
    <div className="collection_item">
        <div className="image"
            style={{
                backgroundImage: `url(${props.imageUrl})`
            }}
        >
            <div className="collection_footer">
                <span className="name">{props.name}</span>
                <span className="price">{props.price}</span>
            </div>
        </div>
    </div>
)


export default Collection;