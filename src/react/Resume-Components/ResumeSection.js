import React from 'react';
import Title from './Title';
import Item from './Item';

export default class ResumeSection extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className= 'resume-section'>
				<Title title = {this.props.title} />
				<Item />
			</div>

		)

		
	}

}