import React from 'react';
import './Nav.css'


class Nav extends React.Component {
	state = {}

	render() {
		return (
			<nav className='navbar navbar-light bg-light'>
				<span id='span'>Background Generator</span>
			</nav>
		)
	}
}

export default Nav;