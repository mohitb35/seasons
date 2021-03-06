import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

	/* constructor(props) {
		super(props); //call component parent constructor function

		// Only exception where we do direct assignment to this.state
		this.state = {
			lat: null,
			errorMessage: ""
		}
	} */

	state = {
		lat: null,
		errorMessage: ""
	};

	componentDidMount() {
		console.log('component rendered to screen', this.state);
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// set state using setState...no direct assignment!
				this.setState({
					lat: position.coords.latitude
				})
				// NOT this.state.lat = position.coords.latitidue --> INVALID!!
			},
			(err) => {
				this.setState({
					errorMessage: err.message
				})
			}
		);
	}

	componentDidUpdate() {
		console.log('component updated', this.state);
	};

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return (
				<div>
					Error: {this.state.errorMessage}
				</div>
			)
		} 
		
		if (!this.state.errorMessage && this.state.lat) {
			return (
				<SeasonDisplay lat={this.state.lat} />
			)
		}

		return (
			<Spinner message="Please provide location permissions."/>
		);
	}


	// Must define render
	render() {
		return (
			<div className="">
				{this.renderContent()};
			</div>
		)
	} 
}
	
/* const App = () => {
	let latitude;
	window.navigator.geolocation.getCurrentPosition(
		(position) => {
			latitude = position.coords.latitude;
			console.log(position.coords.latitude);
		},
		(err) => {
			console.log(err);	
		}
	)

	return (
		<div>Hi there!
			<SeasonDisplay />
			{latitude}
		</div>
	)
} */

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);