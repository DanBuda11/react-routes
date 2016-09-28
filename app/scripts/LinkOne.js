import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<div>You got to Link 1!</div>
				<Link to="/">Back Home</Link>
			</div>
		);
	}
});