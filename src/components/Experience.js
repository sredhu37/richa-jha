import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return(
    <div className='Experience'>
      <a id="experience" />
      <div className='experienceHeading'>
        <h2>EXPERIENCE</h2>
      </div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EE4B28', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #EE4B28' }}
            date="October 2020 - present"
            iconStyle={{ background: '#EE4B28', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Business Analyst </h3>
            <h5 className="vertical-timeline-element-subtitle"> Annalect </h5>
            <br />
            <div className='experienceContent'>
              <b>1. Setting up end to end data management system</b>
              <ul>
                <li>Led a team of 5 analysts in the development of end to end data management set up in Datorama</li>
                <li>Connected 5000+ data streams from various UIs to single Datorama platform</li>
                <li>Set up codes in Datorama to clean up, harmonize and maintain data streams to ensure accuracy and efficiency of data</li>
                <li>Delivered support to the editorial staff by creating piktocharts illustrating key facts and trends</li>
              </ul>
              <br />
              <b>2. Customer Servicing and Reporting</b>
              <ul>
                <li>Improved relationship with clients by providing automated dashboards to ensure the data completeness of the leadership facing dashboards</li>
                <li>Automated 1000+ reports in Datorama for needs of different stakeholders globally</li>
              </ul>
              <b>3. Awards</b>
              <ul>
                <li><b><i>Annalectual of the Quarter Award 2020</i></b> for building dashboards that catered to the needs of a global audience at one place</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EE4B28', color: '#fff' }}
            date="May 2019 - October 2020"
            iconStyle={{ background: '#EE4B28', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Senior Associate </h3>
            <h5 className="vertical-timeline-element-subtitle"> Annalect </h5>
            <br />
            <div className='experienceContent'>
              <ul>
                <li>Organized huge data sets effectively via advanced querying, visualization, and analytics tools</li>
                <li>Stationed data analysis on different media channels' platforms like Facebook, Display and Video 360, Google Analytics, Programmatic platforms like Amazon among many others, harmonized them together to get the best of all the worlds and created dashboards to boost flagship business initiatives for a F&B client</li>
                <li>Demonstrated Expertise in reporting UIs of various media channels which ensures 100% data accuracy in the dashboards</li>
              </ul>
              <b>Awards</b>
              <ul>
                <li><b><i>On The Spot Award 2019</i></b> for leading a POC and converting into a successful long-term business engagement with the client</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EE4B28', color: '#fff' }}
            date="March 2017 - April 2019"
            iconStyle={{ background: '#EE4B28', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Associate </h3>
            <h5 className="vertical-timeline-element-subtitle"> Annalect </h5>
            <br />
            <div className='experienceContent'>
              <ul>
                <li>Responsible for creating a POC on Power BI and using Power Query and Big Query as ETL tools that resulted in a successful engagement with the client</li>
                <li>Replicated a Tableau dashboard on MS Excel with same level of automation</li>
                <li>Convinced and shifted the entire ETL process of a pilot project to R to save manual hours on data cleaning</li>
              </ul>
              <b>Awards</b>
              <ul>
                <li><b><i>Rising Star of the Year 2017</i></b> out of 500+ Analysts for rendering outstanding data processing services for all stakeholders</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work experienceContent"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            date="January 2016 - Feb 2016"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> Trainee Decision Scientist </h3>
            <h5 className="vertical-timeline-element-subtitle"> Mu Sigma </h5>
            <br />
            <div className='experienceContent'>
              <ul>
                <li>Created a dashboard on Power BI to show the impact of numerous factors on calculation of probability of outbreak of a disease</li>
                <li>Built a dashboard using R Shiny that measured the Loyalty and Retention of a Customer.</li>
                <li>Created a mock project for a Pharmaceutical client to measure the impact of a change in sales representative to location mapping in their business plan</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education experienceContent"
            contentStyle={{ background: 'turquoise', color: '#fff' }}
            date="July 2012 - June 2016"
            iconStyle={{ background: 'turquoise', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> B.Tech. </h3>
            <h5 className="vertical-timeline-element-subtitle"> Manipal Institute of Technology </h5>
            <br />
            <div className='experienceContent'>
              <ul>
                <li>Media Head at Society of Automotive Engineers (SAE Manipal Collegiate Club)</li>
                <li>Performed in Flash Mob for Chill Maadi (an NGO in Manipal Institute of Technology)</li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;