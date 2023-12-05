import React from 'react'
import './Header.css';
import logo from '../../assests/logo.png';

const Header = () => {
  return (
    <div className='header'>
        <img className='header__img' src={logo} alt='logo'/>
        <ul className='header__menu-items'>
            <li className='header__menu-items__item'>Home</li>
            <li className='header__menu-items__item'>Services</li>
            <li className='header__menu-items__item'>Packages</li>
            <li className='header__menu-items__item'>Contact us</li>
        </ul>
        <button className='header__button'>Join us</button>
    </div>
  )
}

export default Header