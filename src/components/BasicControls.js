import React from 'react';
import './BasicControls.css';


class BasicControls extends React.Component {
	state = {}

	render() {
		// console.log(select.value)
		const { props } = this;
		return (
			<div className="nav flex-row">
				<div className="flex-column select-position">
					<p className="select-p">linear direction</p>
					<select 
						id="linear-gradient"
						disabled={ props.isDisabled[1] ? 'disabled' : false}
						onChange={props.onSelect}
					>
						<option value='to right, '>Left to Right</option>
						<option value=' '>Top to Bottom</option>
						<option value='to right bottom, '>Diagonal</option>
					</select>
				</div>
				<div className="flex-column select-position">
					<p className="select-p">radial direction</p>
					<select 
						id="radial-gradient" 
						disabled={ props.isDisabled[0] ? 'disabled' : false}
						onChange={props.onSelect}
					>
						<option value="circle at center center,">Center</option>
						<option value="circle at left center,">Left</option>
						<option value="circle at left top,">Left Top</option>
						<option value="circle at top,">Top</option>
						<option value="circle at right top,">Right Top</option>
						<option value="circle at right,">Right</option>
						<option value="circle at right bottom,">Right Bottom</option>
						<option value="circle at bottom,">Bottom</option>
						<option value="circle at left bottom,">Bottom Left</option>
					</select>
				</div>
			</div>
		)
	}
}

export default BasicControls;