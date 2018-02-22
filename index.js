import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { configureStore } from './store';
import { renderRoot } from './containers';



// const App = () => (
//   <div className="App">
//     <img className="App-Logo" src={logo} alt="React Logo" />
//     <h1 className="App-Title">Hello Parcel x React Testing 123</h1>
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById('root'));



const initialState = {};
const store = configureStore(initialState);

renderRoot(store);
