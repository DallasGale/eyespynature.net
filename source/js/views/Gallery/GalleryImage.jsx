import React, { Component } from 'react';
import { Grid, Modal } from 'semantic-ui-react';
import GalleryModal from './GalleryModal.jsx';


// start //

class GalleryImage extends Component {



  render() {
    let title = this.props.imageTitle;
    if (title === null) {
      title = 'untitled';
    }

    const lightboxStyle = {
      background: 'none',
      padding: 0
    }

    return (
      <Grid.Column key={ this.props.imageRef } computer={ 5 } tablet={ 5 } mobile={ 8 }>
          <Modal style={ lightboxStyle } trigger={
            <div className='c-gallery-thumb'>
              <img
                className='c-gallery-thumb__image'
                src={ this.props.imageUrl }
                alt={ this.props.imageAlt }
              />
            </div>
          } basic size='large' dimmer='blurring'>
            <Modal.Content>
              <div class='gallery-lightbox'>
                <img
                  className='c-gallery-full__image'
                  src={ this.props.imageUrl }
                  alt={ this.props.imageAlt }
                />
            </div>
            </Modal.Content>
          </Modal>

        <GalleryModal
          camera={ this.props.camera }
          cMarketUrl={ this.props.cMarketUrl }
          focal={ this.props.focal }
          iso={ this.props.iso }
          info={ this.props.info }
          imageUrl={ this.props.imageUrl }
          inprntPrint={ this.props.inprntPrint }
          inprntCards={ this.props.inprntCards }
          inprntCases={ this.props.inprntCases }
          imageRef={ this.props.imageRef }
          shutterUrl={ this.props.shutterUrl }
          shutterspeed={ this.props.shutterspeed }
          modalTitle={ title }
          products={ this.props.products }
          zazzleBags={ this.props.zazzleBags }
        />
      </Grid.Column>
    );
  }
}

export default GalleryImage;

GalleryImage.propTypes = {
  camera: React.PropTypes.string.isRequired,
  cMarketUrl: React.PropTypes.string,
  focal: React.PropTypes.string,
  imageAlt: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  imageTitle: React.PropTypes.string,
  inprntCards: React.PropTypes.string,
  inprntCases: React.PropTypes.string,
  inprntPrint: React.PropTypes.string,
  info: React.PropTypes.string,
  iso: React.PropTypes.number,
  imageRef: React.PropTypes.string.isRequired,
  shutterUrl: React.PropTypes.string,
  shutterspeed: React.PropTypes.string,
  zazzleBags: React.PropTypes.string,
};
