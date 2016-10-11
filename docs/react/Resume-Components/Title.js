import React from 'react';

export default class Title extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className = "resume-title"> {this.props.title} </div>
			)
	
	}

}