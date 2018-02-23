import React from 'react';
import AsdHead from './AsdHead';
import BasicControls from './BasicControls';
import AdvControls from './AdvControls';
import './Aside.css';

class Aside extends React.Component {
	state = {
		active: [true, false],
	}

	// Gradient Direction Select Handler
	selectDirection = (e) => {
		console.log('aside value', e.target.value)
		const currentState = this.state.active
		if (e.target.id ==='linear-gradient' || e.target.id.includes('angle')) {
			currentState[0] = true
			currentState[1] = false
		} else {
			currentState[0] = false
			currentState[1] = true
		}
		this.setState({active: currentState})
		this.props.onDirectionChange(e.target.id, e.target.value)
	}

	render() {
		const { props, state } = this;
		return (
			<div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
				<AsdHead 
					activeClass = { state.active } 
					toggleActive= { this.selectDirection }
					setValue={state.directionValue}
				/>
				<p className="settings">basic settings</p>
				<BasicControls 
					isDisabled = { state.active } 
					selectOption={ state.selectLinear} 
					onSelect={this.selectDirection} 
				/>
				<p className="settings">advanced settings</p>
				<AdvControls 
					isDisabled = { state.active } 
					onSelect={this.selectDirection} 
					setAngle={props.angle}/>
				<button id="random-color" onClick={props.randomize}>randomize</button>
			</div>
		)
	}
}

export default Aside;