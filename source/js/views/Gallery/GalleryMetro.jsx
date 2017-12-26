
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import TransitionGroupPlus from 'react-transition-group-plus'
import DemoSquareComponent from './DemoSquareComponent';
import Metro from 'react-metro';
import images from '../../api/data/imageData.json';

const defaultAnimationOverride = {
	animation: {
		out: {
			time: 0.5,
			delay: 0
		},
		in: {
			time: 1,
			delay: 0
		},
		willEnter: {
			from: { opacity: 0, y: 50 },
			to: { opacity: 1, y: 0, ease: 'easeInOutQuad' }
		},
		willLeave: {
			from: {
				opacity: 1,
				y: 0
			},
			to: { opacity: 0, y: 50, ease: 'easeInOutQuad' }
		}
	}
}
// start //

export default class GalleryMetro extends Component {
  constructor() {
    super();
		const data = [
			{ name: '1', emoji: '🐵' },
			{ name: '2', emoji: '🐶' },
			{ name: '3', emoji: '🐮' },
			{ name: '4', emoji: '🐕' },
			{ name: '5', emoji: '🐩' },
			{ name: '6', emoji: '🐺' },
			{ name: '7', emoji: '🦊' },
			{ name: '8', emoji: '🐱' },
			{ name: '9', emoji: '🐈' },
			{ name: '10', emoji: '🦁' },
			{ name: '11', emoji: '🐯' },
			{ name: '12', emoji: '🐅' },
			{ name: '13', emoji: '🐆' },
			{ name: '14', emoji: '🐴' },
			{ name: '15', emoji: '🐎' },
			{ name: '16', emoji: '🦄' },
			{ name: '17', emoji: '🐂' },
			{ name: '18', emoji: '🐷' }
		]
    this.state = {
			advanced_show: false,
			advanced_mountComplete: false,
			advanced_unmountComplete: false,
			data
		}
    this.advanced_toggle = this.advanced_toggle.bind(this)
  }

  advanced_toggle() {
		this.setState({
			advanced_show: !this.state.advanced_show,
			advanced_mountComplete: false,
			advanced_unmountComplete: false
		})
	}

  advanced_mountSequenceComplete() {
		// console.log('mountSequenceComplete')
		this.setState({
			advanced_mountComplete: true,
			advanced_unmountComplete: false
		})
	}

  advanced_unmountSequenceComplete() {
  		// console.log('unmountSequenceComplete')
  		this.setState({
  			advanced_mountComplete: false,
  			advanced_unmountComplete: true
  		})
	}

  advanced_componentClickCallback(props, index, isAnimating) {
		console.log('-> click', props, index, isAnimating)
		if (this.state.preset === '') {
			// dont override our current animationMap if no preset is selected
			this.setState({ advanced_show: false })
		} else {
			// generate focus map
			const domino = Metro.generateFocusMap(index, 6, this.state.data.length, this.state.preset, 1)

			this.setState({ advanced_unmountComplete: false, animationMap: domino }, () => {
				this.setState({ advanced_show: false })
			})
		}
	}
  isActive(preset) {
		if (this.state.preset === preset && this.state.advanced_show) {
			return { background: '#000', color: 'white' }
		} else if (this.state.preset === preset && !this.state.advanced_show) {
			return { background: '#453387', color: 'white', opacity: 0.3 }
		} else if (this.state.preset !== preset && !this.state.advanced_show) {
			return { background: '#453387', color: 'white', opacity: 0.1 }
		} else {
			return null
		}
	}


  advanced_renderButtons() {
		return (
			<div>
				<div
					className="buttonStyle"
					style={{
						background: this.state.advanced_show === true ? '#ba4c4c' : '#42a56a'
					}}
					onClick={() => this.advanced_toggle()}>
					{this.state.advanced_show === true ? 'UNMOUNT <-' : '-> MOUNT COMPONENTS'}
				</div>
				<div className="presetWrapper">
					<div
						className="animationPreset"
						style={{
							...this.isActive('dominoForwards')
						}}
						onClick={() => (this.state.advanced_show ? this.activatePreset('dominoForwards') : null)}>
						Domino - forwards
					</div>
				</div>
			</div>
		)
	}

  // Advanced demo:

	renderAdvancedMetro() {
		if (!this.state.advanced_show) {
			return null
		}

		return Metro.sequence(this.state.data, this.state.animationMap, defaultAnimationOverride).map(data => {
			return (
				<Metro.animation
					{...data}
					wrapperType="div"
					onClick={this.advanced_componentClickCallback.bind(this)}
					onMount={this.advanced_mountSequenceComplete.bind(this)}
					onUnmount={this.advanced_unmountSequenceComplete.bind(this)}>
					<DemoSquareComponent {...data.content} />
				</Metro.animation>
			)
		})
	}

  advanced_getText() {
		if (this.state.advanced_unmountComplete === true) {
			return '(unmount sequence complete)'
		} else if (this.state.advanced_mountComplete === true) {
			return '(mount sequence complete)'
		}
		return '...'
	}

	advanced_getSelectedAnimation() {
		return this.state.preset === '' ? 'delayedVertical' : this.state.preset
	}


  render() {
    return (
      <div className="demo">
				<div className="status">
					<p>{'Demo -> status = ' + this.advanced_getText()}</p>
					<p>{'Selected animation = ' + this.advanced_getSelectedAnimation()}</p>
				</div>
				<div style={{ width: '100%' }}>{this.advanced_renderButtons()}</div>
				<div className="containers">
					<TransitionGroupPlus
						component="div"
						style={{
							display: 'flex',
							flexGrow: 1,
							height: 'auto',
							background: 'transparent',
							flexWrap: 'wrap'
						}}>
						{this.renderAdvancedMetro()}
					</TransitionGroupPlus>
				</div>
			</div>
    )
  }
}
