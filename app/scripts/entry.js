import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './app';
import LinkOne from './LinkOne';
import LinkTwo from './LinkTwo';

const router = (
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
			<Route path="/link-one" component={LinkOne}/>
			<Route path="/link-two" component={LinkTwo}/>
		</Router>
);

ReactDOM.render(router, document.getElementById('app'));