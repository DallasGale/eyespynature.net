import React, { Component } from 'react';
import { Button, Modal, Grid, Segment } from 'semantic-ui-react';

const GalleryModalProduct = (props) => {
    const banner = {
      message: 'Not Available',
    }
    const icon = {
      backgroundRepeat: 'no-repeat',
      //backgroundSize: 310, // white
      backgroundSize: 342, // black
    };
    const logo = {
      backgroundSize: 500,
    };
    return (
        <Grid.Column mobile={ 8 } tablet={ 5 } computer={ 5 } className={ props.class }>
          <Segment>
            <a href={ props.link } className='c-modal-products__link'>
              <div className='c-modal-products-wrap'>
                <div
                  style={ icon }
                  className={`c-modal-products-wrap__icon c-modal-products-wrap__icon--${ props.iconName }`}
                />
              <div className='banner'>{ banner.message }</div>
                  <h2 className='c-modal-products-wrap__title'>{ props.title }</h2>
                  <div
                    style={ logo }
                    className={`c-modal-products-wrap__logo c-modal-products-wrap__logo--${ props.logoName }`}
                  />
                </div>
            </a>
          </Segment>
        </Grid.Column>
    )
  }

export default GalleryModalProduct;
