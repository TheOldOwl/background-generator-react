import React from 'react';
import './GradientCanvas.css'


class GradientCanvas extends React.Component {
	state = {
		test: []
	}

	componentDidMount() {
		this.props.getStyle(this.refs.gradient.style.background)
	}

	componentDidUpdate() {
		if (this.props.onScreen !== this.refs.gradient.style.background) {
			this.setState({test: this.refs.gradient.style.background})
			this.props.getStyle(this.refs.gradient.style.background)
		}
	}

	render() {
		const { gradientDirection, colors, inputChange } = this.props;
		return (
			<div
				ref={'gradient'}
				id="gradient" 
				className="col-9" 
				style={{background: `${gradientDirection[0]}( ${gradientDirection[1]} ${colors[0]}, ${colors[1]}`}}
			>
				<div className="nav flex-space-around">
					<div className="input">
						<h3>color picker</h3>
				  		<input 
				  			className="color1" 
				  			type="color" 
				  			name="color1" 
				  			value={`${colors[0]}`} 
				  			onChange={inputChange} 
				  		/>
				  		<input 
				  			className="color2" 
				  			type="color" 
				  			name="color2" 
				  			value={`${colors[1]}`}
				  			onChange={inputChange} 
				  		/>
				  	</div>
				  	<h4>{`background: "${this.props.onScreen}"`}</h4>
				</div>
			</div>
		)
	}
}

export default GradientCanvas;