import React from 'react';
import './Canvas.css';
import Aside from './Aside';
import GradientCanvas from './GradientCanvas';
import randomColor from  '../libs/RandomColor';


class Canvas extends React.Component {
	state = {
		colors: [],
		gradient: [],
		angleValue: [],
		style: []
	}

	onRandomizeClick = (event) => {
		let color1 = randomColor();
		let color2 = randomColor();
		this.setState({colors: [color1, color2]})
	}

	onInputChange = (event) => {
		const inputColors = this.state.colors;
		if (event.target.name.includes('color1')) {
			inputColors[0] = event.target.value
		} else {
			inputColors[1] = event.target.value
		}
		this.setState({colors: inputColors})
	}

	getStyle = (style) => {
		this.setState({style: style})
	}

	setDirection = (type, value) => {
		let direction = this.state.gradient

		if (type.includes('angle')) {
			direction[0] = 'linear-gradient'
			direction[1] = value + 'deg, '
			this.setState({angleValue: value})
		} else if (type === 'linear-gradient') {
			this.setState({angleValue: []})
			if (value === 0) {
				direction[0] = type
				direction[1] = 'to right, '
			} else {
				direction[0] = type
				direction[1] = value
			}	
		} else if (type === 'radial-gradient') {
			this.setState({angleValue: []})
			if (value === 0) {
				direction[0] = type
				direction[1] = 'circle at center center, '
			} else {
				direction[0] = type
				direction[1] = value
			}	
		}
		this.setState({gradient: direction})
	}

	componentWillMount() {
		this.onRandomizeClick()
		this.setState({ gradient: ['linear-gradient', 'to right, '] })
	}
	
	render() {
		const { state } = this;
		const gradient = state.gradient;
		console.log(state.style)
		return (
			<div className='container-fluid'>
				<div className='row'>
					<Aside 
						onTypeChange={ this.setGradientType } 
						randomize={ this.onRandomizeClick }
						onDirectionChange={ this.setDirection }
						angle={state.angleValue}
					/>
					<GradientCanvas 
						gradientDirection={ gradient } 
						colors={ state.colors } 
						inputChange={ this.onInputChange }
						getStyle={this.getStyle}
						onScreen={state.style}
					/>
				</div>
			</div>
		)
	}
}

export default Canvas;