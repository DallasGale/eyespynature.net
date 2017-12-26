import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { Navigation } from './Navigation';
import esnLogo from '../../../assets/img/branding/esnLogoWh.png';
import styles from '../Styles/utilities';



export default class HeaderMenu extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let header = document.getElementById('header');
      header.style.opacity = 0;
      header.style.top = '-100px';
      window.requestAnimationFrame(() => {
      header.style.transition = 'all 0.8s';
      header.style.opacity = 1;
      header.style.top = 0;
    });
  };


  render() {
    const logo = {
      backgroundImage: 'url(' + esnLogo + ')',
      backgroundSize: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    };

    return (
      <header id='header' className='c-header'>
        <div className='c-navbar'>
          <nav id='nav' className='c-navigation'>
            <Grid>
              <Grid.Column style={ styles.u_pad_topbtm__none }>
                <a href='/'>
                  <span className='c-navbar-brand' style={ logo } title='Eye Spy Nature' />
                </a>
                <Navigation style={ styles.u_mar_top_none } />
              </Grid.Column>
            </Grid>
          </nav>
        </div>
      </header>
    );
  }
}
