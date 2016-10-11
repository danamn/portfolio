import React from 'react';
import Title from './Title';
import Item from './Item';

export default class ResumeUnit extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		var unit = this.props.unit;

		return(
			<div className= 'resume-unit'>
				<Title title = {unit.unitTitle} />
				{unit.item.map( (item) => {
					return <Item key = {item.key} item = {item} />
				})

				}

			</div>

		)

		
	}

}