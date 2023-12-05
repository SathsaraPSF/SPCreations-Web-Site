import React from 'react'
import './Hero.css'
import image from '../../assests/image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__left-hero'>
            <span className='hero__left-hero__stroke-text-1 stroke-text'>SP</span>
            <span className='hero__left-hero__stroke-text-2'>creations</span>
            <span className='hero__left-hero__slogen'>Design Dreams,Spreading Smiles</span>
            <div className='hero__left-hero__buttons'>
                   <button className='hero__left-hero__buttons-1'>Get started</button> 
                   <button className='hero__left-hero__buttons-2'>Learn more</button> 
            </div>
        </div>
        <div className='hero__right-hero'>
            <img className='hero__right-hero__img' src={image}/>
        </div>
    </div>
  )
}

export default Hero