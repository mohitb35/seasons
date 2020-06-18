import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

function renderContent(lat, errorMessage) {
	if (errorMessage && !lat) {
		return (
			<div>
				Error: {errorMessage}
			</div>
		)
	} 
	
	if (!errorMessage && lat) {
		return (
			<SeasonDisplay lat={lat} />
		)
	}

	return (
		<Spinner message="Please provide location permissions."/>
	);
}

const App = () => {
	const [lat, setLat] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(()=>{
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// set lat using setLat, no direct assignment
				setLat(position.coords.latitude);
				// NOT lat = position.coords.latitidue --> INVALID!!
			},
			(err) => {
				// set errorMessage using setErrorMessage, no direct assignment
				setErrorMessage(err.message)
			}
		);
	}, []);

	console.log('component rendered to screen', {lat, errorMessage});

	return (
		<div className="border red">
			{renderContent(lat, errorMessage)};
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);