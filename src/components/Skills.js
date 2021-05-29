import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
  return (
    <div className='Skills'>
      <a id="skills" />
      <div className='skillsHeading'>
        <h2>SKILLS EXPERTISE</h2>
        <hr />
        <br />
        {/* <ul>
          <li className='inlineListItem'>1 - Basic</li>
          <li className='inlineListItem'>2 - Novice</li>
          <li className='inlineListItem'>3 - Intermediate</li>
          <li className='inlineListItem'>4 - Advanced</li>
          <li className='inlineListItem'>5 - Expert</li>
        </ul> */}
      </div>
      <h4>SKILLS</h4>
      <div>
        <ul>
          <li className='skill'> Data Analysis <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> Data Visualization <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> Communication <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> Reporting and Quality Assessment <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> Client Relationship Management <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> Business Intelligence <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> KPI Dashboards <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> Leadership <ProgressBar variant="info" now={80} /></li>
        </ul>
      </div>
      <br />
      <h4>TOOLS</h4>
      <div>
        <ul>
          <li className='skill'> Datorama <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> MS Excel <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Automation on Excel <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Alteryx <ProgressBar variant="info" now={80} /></li>
          <li className='skill'> R <ProgressBar variant="warning" now={60} /></li>
          <li className='skill'> SQL <ProgressBar variant="warning" now={60} /></li>
          <li className='skill'> Big Query <ProgressBar variant="warning" now={60} /></li>
          <li className='skill'> Python <ProgressBar variant="warning" now={60} /></li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;