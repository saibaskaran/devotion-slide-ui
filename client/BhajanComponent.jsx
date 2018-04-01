import React from 'react';
import {EditableTextComponent} from './EditableTextComponent.jsx';

export class BhajanComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<EditableTextComponent className="lyrics" text={this.props.lyrics} />
				<EditableTextComponent className="meaning" text={this.props.meaning} />
			</div>
		)
	}
}