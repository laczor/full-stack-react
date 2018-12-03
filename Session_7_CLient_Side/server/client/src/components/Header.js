import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  // We are checking the data to show here
	renderContent () {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return <li><a href="/auth/google">Login With Google</a></li>;
			default:
				return <li><a href="/api/logout">Logout</a></li>;
		}
	}

	render () {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to={this.props.auth ? '/surveys' : '/'}
						className="left brand-logo"
					>
						Emaily
					</Link>
					<ul className="right">
						{/*we can dynamically render contect*/}
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps ({ auth }) {
	return { auth };
}

// This is with ES5
// function mapStateToProps (state) {
// 	return { auth: state.auth }
// }


export default connect(mapStateToProps)(Header);
