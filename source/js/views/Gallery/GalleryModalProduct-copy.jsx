import React, { Component } from 'react';
import { Button, Modal, Grid, Segment } from 'semantic-ui-react';

const GalleryModalProduct = (props) => {
    return (
      <Grid centered stretched columns={ 3 } className='products'>
        <Grid.Column mobile={ 8 } tablet={ 5 } computer={ 5 } className={ props.inprntPrintClass }>
          <Segment>
            <a href={ props.inprntPrints } className='c-modal-products__link'>
              <div className='c-modal-products-wrap'>
                <div
                  style={ props.icon }
                  className='c-modal-products-wrap__icon c-modal-products-wrap__icon--print'
                />
              <div className='banner'>{ props.bannerMessage }</div>
                <h2 className='c-modal-products-wrap__title'>Framed &amp; Un-framed Prints</h2>
                <div
                  style={ props.logo }
                  className='c-modal-products-wrap__logo c-modal-products-wrap__logo--inprnt'
                />
              </div>
            </a>
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={ 8 } tablet={ 5 } computer={ 5 } className={ props.cardClass }>
          <Segment>
            <a href={ props.inprntCards } className='c-modal-products__link'>
              <div className='c-modal-products-wrap'>
                <div
                  style={ props.icon }
                  className='c-modal-products-wrap__icon c-modal-products-wrap__icon--giftcards'
                />
                <div className='banner'>{ props.bannerMessage }</div>
                <h2 className='c-modal-products-wrap__title'>Gift Cards</h2>
                <div
                  style={ props.logo }
                  className='c-modal-products-wrap__logo c-modal-products-wrap__logo--inprnt'
                />
              </div>
            </a>
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={ 8 } tablet={ 5 } computer={ 5 } className={ props.inprntCasesClass }>
          <Segment>
            <a href={ props.inprntCases } className='c-modal-products__link'>
              <div className='c-modal-products-wrap'>
                <div
                  style={ props.icon }
                  className='c-modal-products-wrap__icon c-modal-products-wrap__icon--cases'
                />
                <div className='banner'>{ props.bannerMessage }</div>
                <h2
                  className='c-modal-products-wrap__title'
                >
                  Smartphone Cases
                </h2>
                <div
                  style={ props.logo }
                  className='c-modal-products-wrap__logo c-modal-products-wrap__logo--inprnt'
                />
              </div>
            </a>
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={ 8 } tablet={ 5 } computer={ 5 } className={ props.zazzleBagsClass }>
          <Segment>
            <a href={ props.zazzleBags } className='c-modal-products__link'>
              <div className='c-modal-products-wrap'>
                <div
                  style={ props.icon }
                  className='c-modal-products-wrap__icon c-modal-products-wrap__icon--bags'
                />
                <div className='banner'>{ props.bannerMessage }</div>
                <h2 className='c-modal-products-wrap__title'>Printed Tote Bags</h2>
                <div
                  style={ props.logo }
                  className='c-modal-products-wrap__logo c-modal-products-wrap__logo--zazzle'
                />
              </div>
            </a>
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={ 8 } tablet={ 5 } computer={ 5 } className={ props.shutterClass }>
          <Segment>
            <a href={ props.shutterStock } className='c-modal-products__link'>
              <div className='c-modal-products-wrap'>
                <div
                  style={ props.icon }
                  className='c-modal-products-wrap__icon c-modal-products-wrap__icon--stock'
                />
                <div className='banner'>{ props.bannerMessage }</div>
                <h2 className='c-modal-products-wrap__title'>Hi-Res Stock Photography</h2>
                <div
                  style={ props.logo }
                  className='c-modal-products-wrap__logo c-modal-products-wrap__logo--shutter'
                />
              </div>
            </a>
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={ 8 } tablet={ 5 } computer={ 5 } className={ props.cMarketClass }>
          <Segment>
            <a href={ props.cMarketStock } className='c-modal-products__link'>
              <div className='c-modal-products-wrap'>
                <div
                  style={ props.icon }
                  className='c-modal-products-wrap__icon c-modal-products-wrap__icon--stock'
                />
                <div className='banner'>{ props.bannerMessage }</div>
                <h2 className='c-modal-products-wrap__title'>Hi-Res Stock Photography</h2>
                <div
                  style={ props.logo }
                  className='c-modal-products-wrap__logo c-modal-products-wrap__logo--cMarket'
                />
              </div>
            </a>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }

export default GalleryModalProduct;
