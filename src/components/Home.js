import React from 'react';
import { Favorites } from './Favorites';
import Menu from './Menu';
import Reposgithub from './Reposgithub';


const Home = () => {
    return (
        <div className="container">
            
            <Menu/>
            <div className='d-flex justify-content-between'>
            <Reposgithub/>
            <Favorites/>
            </div> 
        </div>
    );
}

export default Home;
