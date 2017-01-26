
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
// import NavBar from './Navbar';


/* -----------------    COMPONENT     ------------------ */

export const Welcome = () => {
	return(
		<div>
			<div style={ styles.textDiv }>
				<h1 style={ styles.heading1 }>Electro Cat</h1>
				<h2 style={ styles.heading2 }>Talk to a cat!</h2>
				<Link to={'/signup'} style={ styles.adopt }>Adopt Now</Link>
			</div>
			<div style={ styles.catDiv }>
				<img src="/images/cat_grab.jpg" style={ styles.catImg } />
			</div>
		</div>
	)

}


/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({});
const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)(Welcome);



/* -----------------    STYLES     ------------------ */

const styles = {
	textDiv: {
		fontFamily: 'Roboto', 
		float: 'left',
		width: '45%',
    	marginLeft: '8%',
	},
	heading1: {
		fontSize: '4em',
	},
	heading2: {
	},
	adopt: {
		textDecoration: 'none',
		fontSize: '2em',
	},
	catDiv: {
		float: 'left',
		marginLeft: '5%',
		height: '100%',
		width: '40%',
	},
	catImg: {
		height: '100%',
		width: '100%',
	},
}