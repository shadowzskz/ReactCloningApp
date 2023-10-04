import React from 'react';
import Product from './Product';

import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="Image_banner_web"
            />

            <div className="home__row">
                <Product 
                    id="1"
                    title="The Mystery of the Battered COD"
                    price={11.8}
                    rating={5}
                    image="http://www.nownovel.com/blog/wp-content/uploads/2014/08/title2.jpg"
                />

                <Product 
                    id="2"
                    title="The Mystery of the Battered COD"
                    price={11.8}
                    rating={5}
                    image="http://www.nownovel.com/blog/wp-content/uploads/2014/08/title2.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="3"
                    title="The Mystery of the Battered COD"
                    price={11.8}
                    rating={5}
                    image="http://www.nownovel.com/blog/wp-content/uploads/2014/08/title2.jpg"
                />

                <Product 
                    id="4"
                    title="The Mystery of the Battered COD"
                    price={11.8}
                    rating={5}
                    image="http://www.nownovel.com/blog/wp-content/uploads/2014/08/title2.jpg"
                />

                <Product 
                    id="5"
                    title="The Mystery of the Battered COD"
                    price={11.8}
                    rating={5}
                    image="http://www.nownovel.com/blog/wp-content/uploads/2014/08/title2.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="6"
                    title="The Mystery of the Battered COD"
                    price={11.8}
                    rating={4}
                    image="http://www.nownovel.com/blog/wp-content/uploads/2014/08/title2.jpg"
                />
            </div>
        </div>
    )
}

export default Home
