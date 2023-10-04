import React, { PureComponent } from 'react';
import Shop_Data from './Shop.data.js';
import Preview from '../../preview/Preview';


class Shop extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            collection: Shop_Data
        }
    }
    render() {
        const {collection} = this.state;
        return (
            <div className='Shop_page'>
                {
                    collection.map(({id, ...otherCollectionProps}) => (
                        <Preview key={id} 
                            {...otherCollectionProps}
                        />
                    ))
                } 
            </div>
        )
    }
}

export default Shop;