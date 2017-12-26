import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Lightbox from 'react-images';
import GalleryImage from './GalleryImage.jsx';

// start //

class GalleryArray extends Component {



  render() {
    const images = [];
    this.props.images.forEach((image) => {
      if (image.keywords.indexOf(this.props.filterText) === -1) {
        return;
      }
      images.push( // unshift adds items to beginning of array. Push adds to the end
        <GalleryImage
          cMarketUrl={ image.cMarketUrl }
          camera={ image.camera }
          focal={ image.focal }
          key={ image.id }
          imageUrl={ image.src }
          imageAlt={ image.keywords }
          imageTitle={ image.title }
          inprntPrint={ image.inprntPrint }
          inprntCards={ image.inprntCards }
          inprntCases={ image.inprntCases }
          imageRef={ image.imageRef }
          iso={ image.iso }
          info={ image.info }
          shutterUrl={ image.shutterUrl }
          shutterspeed={ image.shutterspeed }
          products={ this.props.products }
          zazzleBags={ image.zazzleBags }
        />
      );
    });

    return (
      <div>
        <Grid id='galleryImages' centered columns='equal'>
            {images}
        </Grid>

      </div>
    );
  }
}
export default GalleryArray;

GalleryArray.propTypes = {
  filterText: React.PropTypes.string,
  images: React.PropTypes.array,
};
