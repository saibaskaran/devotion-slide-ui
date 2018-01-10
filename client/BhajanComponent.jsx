import React from 'react';
import {EditableTextComponent} from './EditableTextComponent.jsx';

export class BhajanComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>Title</h1>
				<EditableTextComponent className="lyrics" />
				<EditableTextComponent className="meaning" />
			</div>
		)
	}
}