import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { SocialSprite } from './SocialSprite';
import NavigationData from '../../api/data/navigationData.json';
import styles from '../Styles/utilities';



export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name,
    });
  }

  render() {
    const { activeItem } = this.state;
    const logoWrapper = {
      display: 'block',
      position: 'relative',
      marginLeft: 0,
      width: 30,
      height: 'auto',
      floay: 'left',
      top: 7,
      left: 0
    };

    const spriteNav = [];

    NavigationData.forEach((item) => {
      spriteNav.push(
        <SocialSprite
          key={ item.id }
          class={ item.class }
          title={ item.titleText }
          alt={ item.altText }
          url={ item.url }
          />
      )
    });

    return (
      <Menu inverted style={ { ...styles.u_bdr_none, ...styles.u_mar_top_none, ...styles.u_bg_trans } }>
        <ul className='c-navigation-internal'>
          <li className='c-navigation-top__list'>
            <Menu.Item
              as={Link}
              to={'/'}
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              className='cta-primary cta-gallery'
              style={ styles.u_bdr_btm_none }
              />
          </li>
          <li className='c-navigation-top__list'>
            <Menu.Item
              as={Link}
              to={'/gallery'}
              name='gallery'
              active={activeItem === 'gallery'}
              onClick={this.handleItemClick}
              style={ styles.u_bdr_btm_none }
              />
          </li>
          <li className='c-navigation-top__list'>
            <Menu.Item
              as={Link}
              to={'/about'}
              name='shop'
              active={activeItem === 'shop'}
              onClick={this.handleItemClick}
              style={ styles.u_bdr_btm_none }
              />
          </li>
          <li className='c-navigation-top__list'>
            <Menu.Item
              as={Link}
              to={'/contact'}
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
              style={ styles.u_bdr_btm_none }
              />
          </li>
        </ul>
        <div className='c-navigation-external'>
          <ul className='c-social-nav'>
            { spriteNav }
          </ul>
        </div>
      </Menu>
    )
  }
}
