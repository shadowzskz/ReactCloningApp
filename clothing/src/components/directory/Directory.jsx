import React from 'react';
import MenuItems from '../menuitem/Menuitems';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title:'Hat',
                    imageUrl: 'https://th.bing.com/th/id/OIP.RHj-VTW0ZdR52yUxurJDmwHaHa?pid=Api&rs=1',
                    id: 1,
                    linkUrl: 'hats'
                },

                {
                    title:'jackets',
                    imageUrl: 'https://th.bing.com/th/id/OIP.jxu7_V_NQRYRQp-xUhv1_gHaLH?pid=Api&rs=1',
                    id: 2,
                    linkUrl:'jackets'
                },

                {
                    title:'Sneakers',
                    imageUrl: 'https://polaris01.mncdn.com/wp-content/uploads/2018/09/100246382_1.jpg',
                    id: 3,
                    linkUrl:''
                },

                {
                    title:'womens',
                    imageUrl: 'https://th.bing.com/th/id/OIP.ZYiOGjcTGNJGux5JX2qwvQHaKl?pid=Api&rs=1',
                    id: 4,
                    size: 'large',
                    linkUrl:''
                },

                {
                    title:'mens',
                    imageUrl: 'https://th.bing.com/th/id/OIP.CKBxErnTm_val6QGDo-ZDwHaLG?pid=Api&rs=1',
                    id: 5,
                    size: 'large',
                    linkUrl:''
                },
            ]
        }
    }

    render() {
        return(
            <div className="directory_menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItems
                            key ={id}
                            {...otherSectionProps}
                        />
                        )
                    )
                }
            </div>
        )
    }

}

export default Directory;