import React from 'react';
import Directory from '../directory/Directory';
import './Preview.scss';
import Collection from '../collection/Collection';

const Preview = (props) => (
    <div className='collection_preview'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className="preview">
            {
                props.items
                .filter((item, index) => index < 4)
                .map(({id, ...otherItemProps }) => (
                    <Collection key={id} {...otherItemProps} />
                )) 
            }
        </div>
    </div>
)

export default Preview;