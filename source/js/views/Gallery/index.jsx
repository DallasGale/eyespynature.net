import React, { Component } from 'react';
import data from '../../api/data/imageData.json';

import GalleryContainer from './GalleryContainer.jsx';

class Gallery extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let galleryImages = document.getElementById('gallery');
      galleryImages.style.opacity = 0;
      window.requestAnimationFrame(function() {
      galleryImages.style.transition = 'all 0.8s';
      galleryImages.style.opacity = 1;
    });
  };
  render() {
    return (
      <div className='o-page-container c-gallery-container' id='gallery'>
        <h1>Gallery</h1>
        <GalleryContainer
          products={ data }
          images={ data } />
      </div>
    );
  }
};

export default Gallery;
