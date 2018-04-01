import React from 'react';
import {SearchBoxComponent} from './SearchBoxComponent.jsx';
import {BhajanComponent} from './BhajanComponent.jsx';


export class SlideComponent extends React.Component {
	constructor() {
		super();
			this.state = {
			title: "OPEN SLOT",
			lyrics: "",
			meaning: "",
			index: 0
		};

		this.prevClickHandler = this.prevClickHandler.bind(this);
		this.nextClickHandler = this.nextClickHandler.bind(this);
	}

	prevClickHandler() {
		this.setState({
			title: this.props.bhajans[this.state.index],
			lyrics: "I am Love",
			meaning: "Premaham",
			index: this.state.index > 0 ? this.state.index - 1 : 0
		});
		console.log("index = " + this.state.index);
	};

	nextClickHandler() {
		this.setState({
			title: this.props.bhajans[this.state.index],
			lyrics: "I am Truth",
			meaning: "Sathyaham",
			index: this.state.index < (this.props.bhajans.length-1) ? this.state.index + 1 : this.props.bhajans.length - 1
		});
		console.log("index = " + this.state.index);
	};

	render() {
		return (
			<div>
				<SearchBoxComponent />
				<button onClick={this.prevClickHandler}>Previous</button>
				<BhajanComponent title={this.state.title} lyrics={this.state.lyrics} meaning={this.state.meaning}/>
				<button onClick={this.nextClickHandler}>Next</button>
			</div>
		)
	}
}