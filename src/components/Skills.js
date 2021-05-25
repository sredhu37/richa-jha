import React from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  return (
    <div className='Skills'>
      <a id="skills" />
      <div className='skillsHeading'>
        <h2>SKILLS EXPERTISE</h2>
        <hr />
        <ul>
          <li className='inlineListItem'>1 - Basic</li>
          <li className='inlineListItem'>2 - Novice</li>
          <li className='inlineListItem'>3 - Intermediate</li>
          <li className='inlineListItem'>4 - Advanced</li>
          <li className='inlineListItem'>5 - Expert</li>
        </ul>
      </div>
      <div className='skillsContent'>
        <ul>
          <li className='skill'>Datorama - 5 <ProgressBar variant="success" now={100} /></li>
          <li className='skill'>R - 4 <ProgressBar variant="info" now={80} /></li>
          <li className='skill'>Python - 3 <ProgressBar variant="warning" now={60} /></li>
          <li className='skill'>Visualization - 3 <ProgressBar variant="warning" now={60} /></li>
          <li className='skill'>Insight - 2 <ProgressBar variant="danger" now={40} /></li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;