import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import data from '../../api/data/imageData.json';
import GalleryContainer from '../../views/Gallery/GalleryContainer.jsx';

export default class Home extends Component {
  render() {
    return (
      <div style={{background: 'black'}}>
        <div className='c-hero-container'>
          <Hero />
        </div>
      </div>
    );
  }
}
