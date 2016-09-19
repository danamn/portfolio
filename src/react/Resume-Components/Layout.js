import React from 'react';
import ResumeSection from './ResumeSection';



export default class Layout extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="wrapper">
		      <h2 className="resume-title">
		        My Resume
		      </h2>
		      <div className='resume-content'>
		      	<ResumeSection title="Professional Experience" /> 
		      	

		      </div>
	    	</div>
	    	)
	}

}