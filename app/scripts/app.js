import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<div>Hi</div>
				<ul>
					<li><Link to="/poop">Poop</Link></li>	
					<li><Link to="/doody">Doody</Link></li>
				</ul>

			</div>
		);
	}
});