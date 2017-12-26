import React, { Component } from 'react';

 class SliderArrowBtns extends Component {
   constructor(props) {
     super(props)
     this.next = this.next.bind(this)
     this.previous = this.previous.bind(this)
   }
   next() {
     this.slider.slickNext()
   }
   previous() {
     this.slider.slickPrev()
   }
  render() {

    return (
      <div>
        <button
          className='c-slider-arrows c-slider-arrows--prev'
          onClick={ this.previous }>
          Previous
        </button>

        <button
          className='c-slider-arrows c-slider-arrows--next'
          onClick={ this.next }>
          Next
        </button>
      </div>
      )
    }
}

export default SliderArrowBtns;
