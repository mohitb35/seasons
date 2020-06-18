import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

import useLocation from './useLocation';

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
	const [lat, errorMessage] = useLocation();

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