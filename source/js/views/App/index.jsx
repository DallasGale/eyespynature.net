import React, { Component } from 'react';
import Routes from 'config/routes';
import Transition from 'react-transition-group/Transition';


import HeaderMenu from 'components/Global/Header';

// toggled theme colors
const defaultTheme = 'default';
const alternativeTheme = 'alternative';

const themeBtn = {
  'position': 'fixed',
  'zIndex': '40',
  'top': '120px',
  'right': '-53px',
  'transform': 'rotateZ(90deg)',
};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: defaultTheme,
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    const toggledTheme = this.state.theme == defaultTheme ? alternativeTheme : defaultTheme;
    this.setState({
      theme: toggledTheme,
    });
  }

  render() {
    return (
      <div>
        <button style={ themeBtn } onClick={ this.changeTheme }>Change site theme</button>
        <div className={ this.state.theme }>
          <HeaderMenu />
          <div className='App'>
            <div className='o-page'>
                <Routes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
