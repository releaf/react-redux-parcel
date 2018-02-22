import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

export function renderRoot(store) {
	console.log('index.jsx');
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
}
