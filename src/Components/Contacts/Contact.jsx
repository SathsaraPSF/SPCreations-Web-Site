import React from 'react';
import './Contact.css'
import whatsapp from '../../assests/WA.png';
import facebook from '../../assests/facebook.png';

export const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact__header'>
            <span className='stroke-text'>Contact</span>
            <span className='contact__header-2'> us</span>
            <span className='contact__header-3'> to get more details</span>
        </div>

        <div className='contact__container'>
            <div className='contact__container-1 contact-containers'>
                <img className='img' src={whatsapp}></img>
                <span><a className='link' href='https://wa.me/message/L56X7SMOIJHUL1'>0772253533</a></span>

            </div>
            <div className='contact__container-2 contact-containers'>
                <img className='img' src={facebook}></img>
                <span><a className='link' href='https://www.facebook.com/profile.php?id=100093541017677&mibextid=ZbWKwL'>@S&P Creations</a></span>
            </div>
        </div>

    </div>
  )
}
