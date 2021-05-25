import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries  } from 'react-vis';
import myPic from '../static/my-photo.jpg';

const About = () => {
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];

  return(
    <div className="About">
      <a id="about" />
      <div className="aboutPhotoDiv">
        <img src={myPic} />
      </div>
      <hr />
      <div className="aboutContent">
        <p>
          Richa is motivated by the belief that data can be used to make better decisions.
          She wants to make it easier for people to understand code and use data efficiently.
          Her experience primarily involves R, Python and Datorama.
        </p>
        <p>
          Richa is motivated by the belief that data can be used to make better decisions.
          She wants to make it easier for people to understand code and use data efficiently.
          Her experience primarily involves R, Python and Datorama.
        </p>
        <h3></h3>
      </div>
      <XYPlot width={300} height={300}>
        <VerticalBarSeries
          data={ data }
          color="white" />
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>
  );
}

export default About;