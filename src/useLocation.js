import { useState, useEffect } from 'react';

export default () => {
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

	return [lat, errorMessage];
	// community convention to return an array. But perhaps an object is better.
}