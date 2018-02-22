import React from 'react';
import { connect } from 'react-redux';

import { test } from '../actions/test';
import logo from '../logo.svg';

import '../index.scss';

class AppContainer extends React.Component {
	render() {
		const {test, fireTest } = this.props;
		const text = `Hello Parcel x React Testing 12345 ${test}`;
		return (
				<div className="App"
					onClick={() => fireTest(!this.props.test)}
				>
					<img className="App-Logo" src={logo} alt="React Logo" />
					<h1 className="App-Title">{text}</h1>
				</div>
			);
	}
}

const mapStateToProps = (state) => {
	return {
		test: state.test,
	}
};

const mapDispatchToProps = (dispatch) => (
	{
		fireTest: (data) => {
			dispatch(test());
		}
	}
);

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);

export default App;


