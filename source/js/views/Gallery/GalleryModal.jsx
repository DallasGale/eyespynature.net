import React, { Component } from 'react';
import { Button, Modal, Grid, Segment } from 'semantic-ui-react';
import esnLogo from '../../../assets/img/branding/logo-black-stamp-only-2x.png';
import GalleryModalProduct from './GalleryModalProduct';
// start //

class GalleryModal extends Component {
  constructor() {
    super();
  }
  render () {
    const logoStyle = {
      maxWidth: 60,
      marginTop: 13
    }

    // links to store products
    let inprntPrintsLink = this.props.inprntPrint;
    let inprntCardsLink = this.props.inprntCards;
    let inprntCasesLink = this.props.inprntCases;
    let zazzleBagsLink = this.props.zazzleBags;
    let shutterStockLink = this.props.shutterUrl;
    let cMarketStockLink = this.props.cMarketUrl;


    // function to display 'unavailble' banner over products
    const availability = (urlType, className) => {
      const unavailable = 'c-modal-products__notAvailable';
      if (urlType === null) {
        className = unavailable;
      }
      return className;
    }

    // empty variable for class name to be assigned + see below
    let printsAvailability = '';
    let cardsAvailability = '';
    let casesAvailability = '';
    let bagsAvailability = '';
    let shutterAvailability = '';
    let cMarketAvailability = '';

    // class variables for each product + function
    const inprntPrintClass = availability(inprntPrintsLink, printsAvailability);
    const inprntCardClass = availability(inprntCardsLink, cardsAvailability);
    const inprntCasesClass = availability(inprntCasesLink, casesAvailability);
    const zazzleBagsClass = availability(zazzleBagsLink, bagsAvailability);
    const shutterClass = availability(shutterStockLink, shutterAvailability);
    const cMarketClass = availability(cMarketStockLink, cMarketAvailability);

    return (
      <Modal trigger={
          <Button className='cta-primary'>
            Purchase { this.props.modalTitle }
          </Button>
        }
        basic
        size='large' dimmer='blurring'>
        <Modal.Content>
          <div className='c-modal-products'>
            <Grid columns='equal'>
              <Grid.Row>
                <Grid.Column width={ 2 }>
                  <img src={ esnLogo } style={ logoStyle } className='c-modal-esnLogo' alt='Eye Spy Nature' />
                </Grid.Column>
                <Grid.Column>
                  <h2 className='c-modal-products__heading'>{ this.props.modalTitle }</h2>
                  <div className='c-modal-products__reference'>{ this.props.imageRef }</div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column mobile={ 16 } tablet={ 10 } computer={ 10 }>
                  <Grid centered stretched columns={ 3 } className='products'>
                    <GalleryModalProduct
                      class= { inprntPrintClass } link={ inprntPrintsLink }
                      iconName='print' logoName='inprnt'
                      title='Framed &amp; Un-framed Prints'
                    />
                    <GalleryModalProduct
                      class= { inprntCardClass } link={ inprntCardsLink }
                      iconName='giftcards' logoName='inprnt'
                      title='Gift Cards'
                    />
                    <GalleryModalProduct
                      class= { inprntCardClass } link={ inprntCasesLink }
                      iconName='cases' logoName='inprnt'
                      title='Smartphone Cases'
                    />
                    <GalleryModalProduct
                      class= { zazzleBagsClass } link={ zazzleBagsLink }
                      iconName='bags' logoName='zazzle'
                      title='Printed Tote bags'
                      />
                    <GalleryModalProduct
                      class= { shutterClass } link={ shutterStockLink }
                      iconName='stock' logoName='shutter'
                      title='Hi-res stock photography'
                      />
                    <GalleryModalProduct
                      class= { cMarketClass } link={ cMarketStockLink }
                      iconName='stock' logoName='cMarket'
                      title='Hi-res stock photography'
                      />
                  </Grid>
                </Grid.Column>
                <Grid.Column only='tablet computer' tablet={ 6 } computer={ 6 }>
                  <div className='c-modal-imageDetails'>
                    <img
                      className='c-modal-imageDetails__thumb'
                      src={ this.props.imageUrl }
                      alt={ this.props.imageAlt }
                    />
                  </div>
                  <ul className='c-modal-imageDetails__list'>
                    <li>
                      <Grid columns='equal' stretched centered>
                        <Grid.Column mobile={ 16 } tablet={ 8 } computer={ 8 }>
                          <div className='c-modal-imageDetails__title'>Shutterspeed</div>
                          <div className='c-modal-imageDetails__title--spec'>
                            { this.props.shutterspeed }
                          </div>
                        </Grid.Column>
                        <Grid.Column mobile={ 16 } tablet={ 8 } computer={ 8 }>
                          <div className='c-modal-imageDetails__title'>ISO</div>
                          <div className='c-modal-imageDetails__title--spec'>
                            { this.props.iso }
                          </div>
                        </Grid.Column>
                        <Grid.Column mobile={ 16 } tablet={ 8 } computer={ 8 }>
                          <div className='c-modal-imageDetails__title'>Focal Length</div>
                          <div className='c-modal-imageDetails__title--spec'>
                            { this.props.focal }
                          </div>
                        </Grid.Column>
                        <Grid.Column mobile={ 16 } tablet={ 8 } computer={ 8 }>
                          <div className='c-modal-imageDetails__title'>Camera</div>
                          <div className='c-modal-imageDetails__title--spec'>
                            { this.props.camera }
                          </div>
                        </Grid.Column>
                        <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 16 }>
                          <div className='c-modal-imageDetails__title'>Info</div>
                          <div className='c-modal-imageDetails__title--spec'>
                            { this.props.info }
                          </div>
                        </Grid.Column>
                      </Grid>
                    </li>
                  </ul>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}


GalleryModal.propTypes = {
  camera: React.PropTypes.string,
  cMarketUrl: React.PropTypes.string,
  focal: React.PropTypes.string,
  imageAlt: React.PropTypes.string,
  inprntCards: React.PropTypes.string,
  inprntCases: React.PropTypes.string,
  inprntPrint: React.PropTypes.string,
  info: React.PropTypes.string,
  iso: React.PropTypes.number,
  imageRef: React.PropTypes.string,
  modalTitle: React.PropTypes.string,
  shutterUrl: React.PropTypes.string,
  shutterspeed: React.PropTypes.string,
  zazzleBags: React.PropTypes.string,
};

export default GalleryModal;
