/**
 * Created by tom on 3/6/2018.
 */
import React from 'react';
import Tilt from 'react-tilt';
import skull from './skull.png';
import './Logo.css';






const Logo = () => {
    return (
        <div className="'ma4 mt0 pa4">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner ap3"><img style={{paddingTop: '20px'}} src={skull} alt="logo"/> </div>
            </Tilt>
        </div>
    )
};

export default Logo;