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
				 		<span className='resume-info-role'> Talent Acquisition Specialist </span> <br/>
				 		<span className='resume-info-entity'> Nexonia Inc.</span>
				 		<span className='resume-info-location'> Montreal, QC </span>
				 	</div>
				 	
				</div>
				<div className='resume-item-details'>
				 		I was responsible for the recruitment of technical roles for a fast-growing software development company. I recruited for the positions: software developers (Java), QA analysts, system administrator. 
	<br/>- In charge of full-cycle recruitment, from requirement analysis, through posting, applicants vetting, headhunting, candidate screening and interviewing to on-boarding.
	<br/>- Developed sourcing strategies - internal and external databases, professional and social networks
				 </div>
			</div>
			)
	
	}

}