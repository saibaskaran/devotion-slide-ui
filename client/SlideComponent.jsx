import React from 'react';
import {SearchBoxComponent} from './SearchBoxComponent.jsx';
import {BhajanComponent} from './BhajanComponent.jsx';

export class SlideComponent extends React.Component {
	render() {
		return (
			<div>
				<SearchBoxComponent />
				<h1>Previous</h1>
				<BhajanComponent />
				<h1>Next</h1>
			</div>
		)
	}
}