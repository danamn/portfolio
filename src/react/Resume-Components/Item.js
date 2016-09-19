import React from 'react';

export default class Item extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		var item = this.props.item; 

		var conditionalDisplay = {

		}

		var conditionalCursor = {

		}

		if (!item.entity) {
			conditionalDisplay = {
			'display': 'none'
			}
		}

		if (!item.details) {
			conditionalCursor = {
			'cursor': 'default'
			}
		}


		return (
			<div>
				<div className="resume-item-top" style={conditionalCursor}> 
				 	<div className='resume-item-time'> <p> {item.time}</p>
				 	</div>
				 	<div className='resume-item-info' > 
				 		<div className='resume-info-role'> {item.role} </div>
				 		<div className='resume-info-entity' style = {conditionalDisplay}> {item.entity} </div>
				 		<div className='resume-info-location' style = {conditionalDisplay} > {item.location} </div>
				 	</div>
				 	
				</div>
				<div className='resume-item-details'>
				 		{item.details}
				 </div>
			</div>
			)
	
	}

}