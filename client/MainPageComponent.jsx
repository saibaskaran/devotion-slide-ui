import React from 'react';
import {ActionBarComponent} from './ActionBarComponent.jsx';
import {SlideComponent} from './SlideComponent.jsx';
import {SideBarComponent} from './SideBarComponent.jsx';

export class MainPageComponent extends React.Component {
	render() {
		return(
			<div>
				<ActionBarComponent />
				<SlideComponent />
				<SideBarComponent />
			</div>
		)
	}
}