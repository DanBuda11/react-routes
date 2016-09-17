import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './app';
import Poop from './Poop';
import Doody from './Doody';

const router = (
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
			<Route path="/poop" component={Poop}/>
			<Route path="/doody" component={Doody}/>
		</Router>
);

ReactDOM.render(router, document.getElementById('app'));