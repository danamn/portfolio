import React from 'react';
import ResumeUnit from './ResumeUnit';



var myResume = [{
	key: 1,
	unitTitle: "Professional Experience <click for details>",
	item: [{
			key: 10,
			time: "May -July 2016",
			role: "IT Talent Acquisition Specialist",
			entity: "Nexonia Inc.",
			location: "Montreal, QC",
			details: "I was responsible for the recruitment of technical roles for a fast-growing software development company. I recruited software developers (Java), QA analysts - mobile and integration, and a  system administrator. "
		},
		{	key: 11,
			time: "May 2014 - March 2016",
			role: "IT Recruiter",
			entity: "Itergy Inc.",
			location: "Montreal, QC",
			details: "As sole recruiter of a Microsoft infrastructure solutions consulting firm, I was the main responsible for the entire full-cycle recruitment for technical roles of all levels: infrastructure consultants, system administrators, project managers, technicians."
		},
		{
			key: 12,
			time: "August 2013 - April 2014",
			role: "IT Recruiter",
			entity: "eVision Inc.",
			location: "Montreal, QC",
			details: "In an expanding staffing and consulting agency, I have rapidly become successful in recruiting for the public sector, for IT roles with very strict requirements: SAP consultants, System Administrators, Testers, Architects."
		}]
	},
	{
	key: 2,
	unitTitle: "Education",
	item: [{
			key: 20,
			time: "2004-2009",
			role: "Bachelor + Master in Psychology",
			entity: "University of Trier",
			location: "Trier, Germany"
			},
			{
			key: 21,
			time: "2000-2004",
			role: "Bachelor in Business Administration",
			entity: "Academy of Economic Studies",
			location: "Bucharest, Romania"
		}]
	},
	{
	key: 3,
	unitTitle: "Programming Training",
	item: [{
			key: 30,
			time: "2016",
			role: "Introduction to Computer Science",
			entity: "MIT edX",
			location: "Online [link]",
			link: '#'
			},
			{
			key: 31,
			time: "2016",
			role: "CSS : Core Concepts",
			entity: "Lynda.com",
			location: "Online [link]",
			link:'http://www.lynda.com/ViewCertificate/F6CA9F55CDEF4403A6D12F2D7886AF6B?utm_source=linkedin&utm_medium=sharing&utm_campaign=certificate'
		},{
			key: 32,
			time: "2016",
			role: "Front-End Development Program",
			entity: "Free Code Camp",
			location: "Online [link]",
			link:'https://www.freecodecamp.com/danamn/front-end-certification'
		},{	
			key: 33,
			time: "2016",
			role: "Various courses on ReactJS",
			entity: "Udemy, LearnCode, LevelUp, Lynda.com"
		}

		]
	},
	{
	key: 4,
	unitTitle: "IT Skills",
	item: [{
			key:40,
			time: 'Front-End',
			role: "HTML, CSS, JavaScript, jQuery, ReactJS"
		},
		{	
			key:41,
			time: 'Back-End',
			role: "Basic level of NodeJS, Python, SQL"
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
		      	{myResume.map( (unit) => {
		      		return <ResumeUnit unit = {unit} key = {unit.key} />
		      		})
		      	} 

		      </div>

	    	</div>
	    	)
	}

}