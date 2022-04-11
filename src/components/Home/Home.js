import React from 'react';
import { Link } from 'react-router-dom';
import Photo from './img/austin.png'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div>
                <h1>New Collection For Fall</h1>
                <p><small>Discover all the new arrivals of ready-to-wear collection.</small></p>
                <Link className='shop-btn' to="/shop">SHOP NOW</Link>
            </div>
           <div>
           <img className='home-img' src={Photo} alt="" />
           </div>
        </div>
    );
};

export default Home;