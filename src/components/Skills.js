import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
  return (
    <div className='Skills'>
      <a id="skills" />
      <div>
        <h2>SKILLS EXPERTISE</h2>
        <hr />
      </div>
      <br />
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
      <br />
      <h4>CERTIFICATIONS</h4>
      <div>
        <ul>
          <li className='skill'> Introduction to Google Data Studio <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Datorama - 3 levels (Specialist, Expert and Champion) <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Salesforce Fundamentals of Digital Marketing <ProgressBar variant="success" now={100} /></li>
          <li className='skill'> Google Digital Unlocked <ProgressBar variant="success" now={100} /></li>
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Skills;