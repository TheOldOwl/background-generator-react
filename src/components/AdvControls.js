import React from 'react';
import './AdvControls.css'

class AdvControls extends React.Component {
	state = {}

	render() {
		const { props } = this
		return (
			<div className="angle-position" id="slide">
				<input 
					id="angle-value" 
					type="text" 
					name="angle" 
					size="3" 
					maxLength="3" 
					value={props.setAngle}
					disabled={props.isDisabled[1] ? 'disabled': false}
					onChange={props.onSelect}
				/> °
				<input 
					id="angle-slide" 
					type="range" 
					name="slide" 
					min= "-90" 
					max="90" 
					value={props.setAngle}
					disabled={this.props.isDisabled[1] ? 'disabled': false}
					onChange={props.onSelect}
				/>
			</div>
		)
	}
}

export default AdvControls;