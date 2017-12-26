import React, { Component } from 'react';

import { GalleryPage } from './GalleryPage';

// start //

export default class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      modalOpen: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  // Filter function //
  handleFilterTextChange(filterText) {
    this.setState({
      filterText,
    });
  }

  render() {
    return (
      <GalleryPage
        filterText={ this.state.filterText }
        handleFilterTextChange={ this.handleFilterTextChange }
        images={ this.props.images }
      />
    );
  }
}

GalleryContainer.PropTypes = {
  images: React.PropTypes.array.isRequired
}
