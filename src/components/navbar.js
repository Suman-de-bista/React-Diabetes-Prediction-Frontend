import React from 'react';
import {MdHome,MdOutlineOnlinePrediction,} from 'react-icons/md'
import {IoIosStats} from 'react-icons/io';
import {FcAbout} from 'react-icons/fc'
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li className='sidebar-headline'>
                    <img src='images/doc1.png' alt='logo'/>
                    <h1>Diabetes </h1>
                    <h1>Prediction </h1>
                </li>
                <li>
                    <Link to='/'>
                        <MdHome className='logo'/>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/predict'>
                        <MdOutlineOnlinePrediction className='logo'/>
                        Predict
                    </Link>
                </li>
                <li>
                    <Link to='/stats'>
                        <IoIosStats className='logo'/>
                        Stats
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        <FcAbout className='logo'/>
                        About Us    
                    </Link>
                </li>
                
            </ul>
            
        </div>
    );
}

export default Navbar;