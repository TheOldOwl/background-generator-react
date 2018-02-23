import React from 'react';
import './AsdHead.css'

class AsdHead extends React.Component {
	state = {
	}

	render() {
		const { props } = this;
		return (
			<div className="flex-column">
				<ul className="nav flex-row">
				  <li 
				  	id="linear-gradient"
				  	className={props.activeClass[0] ? 'active' : null}
				  	disabled={props.activeClass[0] ? 'disabled' : false}
				  	onClick={props.toggleActive}>linear
				  </li>
				  <li 
				  	id='radial-gradient'
				  	className={props.activeClass[1] ? 'active' : null}
				  	disabled={props.activeClass[1] ? 'disabled' : false}
				  	onClick={props.toggleActive}>radial
				  </li>
				</ul>
			</div>
		)
	}
}

export default AsdHead;