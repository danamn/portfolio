import React from 'react';

export default class Item extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
			<div className="resume-item-top"> 
			 	<div className='resume-item-time'> <p>April - July 2016 </p>
			 	</div>
			 	<div className='resume-item-info'> 
			 		<span className='resume-info-role'> Recruiter </span> <br/>
			 		<span className='resume-info-entity'> Nexonia </span>
			 		<span className='resume-info-location'> Montreal, QC </span>
			 	</div>
			 	
			</div>
			<div className='resume-item-details'>
			 		Bla Bla
			 </div>
			</div>
			)
	
	}

}