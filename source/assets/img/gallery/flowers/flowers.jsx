import React, { Component } from 'react';

export default class Flowers extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const FlowerGallery =
    [
      {
        id: 1,
        url: './assets/gallery/flowers/ESN-FLW-0000036.jpg'
      },
      {
        id: 2,
        url: './assets/gallery/flowers/ESN-FLW-0000039.jpg'
      },
      {
        id: 3,
        url: './assets/gallery/flowers/ESN-FLW-0000042.jpg'
      },
      {
        id: 4,
        url: './assets/gallery/flowers/ESN-FLW-0000045.jpg'
      }
    ];


      return(
        {FlowerGallery}
      );
  }


}
