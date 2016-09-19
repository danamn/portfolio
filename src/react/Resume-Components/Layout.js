import React from 'react';
import ResumeUnit from './ResumeUnit';



var myResume = [{
	key: 0,
	unitTitle: "Professional Experience",
	item: [{
			time: "May -July 2016",
			role: "IT Talent Acquisition Specialist",
			entity: "Nexonia Inc.",
			location: "Montreal, QC",
			description: "Bla bla"
		},
		{
			time: "May 2014 - March 2016",
			role: "IT Recruiter",
			entity: "Itergy Inc.",
			location: "Montreal, QC",
			description: "Bla bla "
		},
		{
			time: "August 2013 - April 2014",
			role: "IT Recruiter",
			entity: "Itergy Inc.",
			location: "Montreal, QC",
			description: "Bla bla"
		}]
	},
	{
	key: 1,
	unitTitle: "Education",
	item: [{
			time: "2004-2009",
			role: "Bachelor + Master in Psychology",
			entity: "University of Trier",
			location: "Trier, Germany"
			},
			{
			time: "2000-2004",
			role: "Bachelor in Business Administration",
			entity: "Academy of Economic Studies",
			location: "Bucharest, Romania"
		}]
	},
	{
	key: 2,
	unitTitle: "Programming Training",
	item: [{
			time: "2016",
			role: "Introduction to Computer Science",
			entity: "MIT edX",
			location: "Online [link]"
			},
			{
			time: "2016",
			role: "Fundamentals of CSS",
			entity: "Lynda.com",
			location: "Online [link]"
		}]
	},
	{
	key: 3,
	unitTitle: "IT Skills",
	item: [{
			role: "HTML 5, CSS, JavaScript, jQuery, ReactJS"
		},
		{
			role: "Python (basic), SQL (basic)"
		}]
	}]

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
		      	<ResumeUnit title="Professional Experience" /> 
		      	<ResumeUnit title="Education" /> 
		      	<ResumeUnit title="Programming training" /> 
		      	<ResumeUnit title="IT Skills" /> 

		      </div>
	    	</div>
	    	)
	}

}