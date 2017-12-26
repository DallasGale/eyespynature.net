import React, { Component } from 'react';
import HeroSlider from './HeroSlider';
import data from '../../api/data/heroImages.json';
import esnLogo from '../../../assets/img/branding/esnLogoWh.png';
import styles from '../Styles/utilities';

class Hero extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let logo = document.getElementById('logo');
      logo.style.opacity = 0;
      logo.style.top = '-300px';
      window.requestAnimationFrame(function() {
        logo.style.transition = 'all 0.8s';
        logo.style.transitionTimingFunction = 'easeOutQuart';
        logo.style.opacity = 1;
        logo.style.top = 0;
    });
  };

  render() {
    const images = data;
    const logoWrap = {
      display: 'table-cell',
      verticalAlign: 'middle',
      textAlign: 'center'
    }

    return (
      <div>
        <HeroSlider images={ images }/>
        <div id='logo' className='c-hero-logo__container'>
          <div style={ logoWrap }>
            <img style={{ maxWidth: 110 }} src={esnLogo} alt='Eye Spy Nature' />
            <h1 className='c-hero-logo__title'>
              BOTANIC &amp; NATURE<br />
              PHOTOGRAPHY<br />
            <span>Melbourne, Australia</span>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
