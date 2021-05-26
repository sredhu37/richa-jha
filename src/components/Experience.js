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
      <div className='experienceContent'>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EE4B28', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #EE4B28' }}
            date="October 2020 - present"
            iconStyle={{ background: '#EE4B28', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Annalect, Bangalore</h4>
            <p>
              Some random content for now
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EE4B28', color: '#fff' }}
            date="June 2018 - October 2020"
            iconStyle={{ background: '#EE4B28', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Senior Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Annalect, Bangalore</h4>
            <p>
              Some random content for now
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EE4B28', color: '#fff' }}
            date="July 2016 - June 2018"
            iconStyle={{ background: '#EE4B28', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Annalect, Bangalore</h4>
            <p>
              Again some random text here
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            date="January 2016 - July 2016"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Mu Sigma, Bangalore</h4>
            <p>
              Some pilot project
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'blue', color: '#fff' }}
            date="July 2012 - January 2016"
            iconStyle={{ background: 'blue', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Social Media Head, SAE</h3>
            <h4 className="vertical-timeline-element-subtitle">Manipal Institute of Technology</h4>
            <p>
              Some content here
            </p>
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