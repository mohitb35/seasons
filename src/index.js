import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

const App = () => {
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
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);