import React from 'react';
import Title from './Title';
import Item from './Item';

export default class ResumeUnit extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className= 'resume-unit'>
				<Title title = {this.props.title} />
				<Item />
				<Item />
				<Item />
			</div>

		)

		
	}

}