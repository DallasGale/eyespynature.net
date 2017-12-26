import React from 'react';

const HeroImage = (props) => {
  const style = {
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    height: '100vh',
    width: '100%'
  }

  return <div className='c-hero__image' style={ style } />
}

export default HeroImage;
