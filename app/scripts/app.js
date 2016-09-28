import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<div>Hi</div>
				<ul>
					<li><Link to="/link-one">Link 1</Link></li>	
					<li><Link to="/link-two">Link 2</Link></li>
				</ul>

			</div>
		);
	}
});