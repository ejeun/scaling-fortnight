import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

//import ChatBox from './ChatBox';
// import NavBar from './Navbar';


/* -----------------    COMPONENT     ------------------ */

export const Welcome = () => {
	return (
		<div className='splash'>
			{/*<div className='chat'>
          <ChatBox
            messages={[]}
            addMessage={() => {}}
          />
       </div>*/}

					<div style={ styles.txt }>
						<h1 style={ styles.heading1 }>Electro Cat</h1>
					</div>

					<div style={ styles.txt }>
						<h2 style={ styles.heading2 }>talk to a cat with a dream...! <br/><br/>
							<Link to={'/signup'} style={ styles.adopt }>ADOPT NOW</Link>
						</h2>
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
	txt: {
		fontFamily: 'Roboto',
		color: 'white',
		marginLeft: '10%',
	},
	heading1: {
		fontSize: '4em',
		marginTop: '20%',
	},

	adopt: {
		textDecoration: 'none',
	},
}
