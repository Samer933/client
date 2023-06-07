import React from 'react';
import "./Footer.css";
import shapeBg from '../../../assets/Home/shape-bg.png';

function Footer(props) {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
            <img src={shapeBg} alt='Something went wrong' />


               {/*<img src={require("../../../assets/Home/shape-bg.png").default} alt='Something went wrong'/> */} 
            </div>
        </div>
    );
}

export default Footer;