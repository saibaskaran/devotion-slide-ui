import React from 'react';

export class EditableTextComponent extends React.Component {
	render() {
		return (
			<div>
				{this.props.text}
			</div>
		)
	}
}