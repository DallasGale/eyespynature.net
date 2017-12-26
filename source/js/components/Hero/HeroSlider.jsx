import React, { Component } from 'react';
import HeroImage from './HeroImage';
import Slider from 'react-slick';
import 'style-loader!css-loader!slick-carousel/slick/slick.css';
import 'style-loader!css-loader!slick-carousel/slick/slick-theme.css';

class HeroSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 4000,
      fade: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false
    };

    const imagesArray = [];

    this.props.images.forEach((image) => {
      imagesArray.push(
        <div key={ image.id }>
          <HeroImage url={ image.url } />
        </div>
        );
    });

    return (
      <div>
        <Slider ref={c => this.slider = c } {...settings}>
          { imagesArray }
        </Slider>
      </div>
      );
    }
}

export default HeroSlider;
