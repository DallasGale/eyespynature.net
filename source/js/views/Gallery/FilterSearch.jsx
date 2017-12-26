import React, { Component } from 'react';
import PropTypes from 'prop-types';

// start //

export default class FilterSearch extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  // function for input text
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value.toLowerCase());
    // if(e.target.value)
  }


  render() {
    const filterText = this.props.filterText;
    const checkboxList = {
      'listStyle': 'none',
      'display': 'block',
    };
    const checkboxListItem = {
      'display': 'inline-block',
    };
    return (
      <div className='search-filtered'>
        <form className='search-filtered-form'>
          <input
            className='search-filtered-form__input'
            type='text'
            placeholder='Search...'
            value={ filterText }
            onChange={ this.handleFilterTextChange }
          />

          {/*// TODO //*/}
          {/*<ul style={ checkboxList }>*/}
            {/*<li style={ checkboxListItem }>*/}
              {/*<input*/}
                {/*type='checkbox'*/}
              {/*/>*/}
              {/*{' '}*/}
              {/*Flowers*/}
            {/*</li>*/}
            {/*<li style={ checkboxListItem }>*/}
              {/*<input*/}
                {/*type='checkbox'*/}
              {/*/>*/}
              {/*{' '}*/}
              {/*Insects*/}
            {/*</li>*/}
            {/*<li style={ checkboxListItem }>*/}
              {/*<input*/}
                {/*type='checkbox'*/}
              {/*/>*/}
              {/*{' '}*/}
              {/*Landscapes*/}
            {/*</li>*/}
            {/*<li style={ checkboxListItem }>*/}
              {/*<input*/}
                {/*type='checkbox'*/}
              {/*/>*/}
              {/*{' '}*/}
              {/*Birds*/}
            {/*</li>*/}
          {/*</ul>*/}
        </form>
      </div>
    );
  }
}

FilterSearch.propTypes = {
  filterText: PropTypes.string,
  onFilterTextChange: PropTypes.func,
};
