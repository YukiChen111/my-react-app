import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {Provider} from 'react-redux';
import store from './store.js';
// import {changeColor} from './actions/square-actions';
// import {connect} from 'react-redux'
// import root from './reducers/square-reducer';
// const App=<h1>my test app</h1>

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<App name='1'/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')

);
// console.log(store.getState())
// let unsubcribe=store.subscribe(()=>
// console.log(store.getState())
// )
// store.dispatch(changeColor('blue'));
// unsubcribe();
serviceWorker.unregister();
