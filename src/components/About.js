import React from 'react';
// import { XYPlot, XAxis, YAxis, VerticalBarSeries  } from 'react-vis';
import myPic from '../static/my-photo.jpg';

const About = () => {
  // const data = [
  //   {x: 0, y: 8},
  //   {x: 1, y: 5},
  //   {x: 2, y: 4},
  //   {x: 3, y: 9},
  //   {x: 4, y: 1},
  //   {x: 5, y: 7},
  //   {x: 6, y: 6},
  //   {x: 7, y: 3},
  //   {x: 8, y: 2},
  //   {x: 9, y: 0}
  // ];

  return(
    <div className="About">
      <a id="about" />
      <div className="aboutPhotoDiv">
        <img src={myPic} alt="Photo with my son" />
      </div>
      <hr />
      <div className="aboutContent">
        <p>
          5 years experienced Data Analytics professional and a Datorama specialist possessing a prolific track record of creating visualization dashboards, harmonizing data across different media channels like DV360, DCM, social media platforms and viewability platforms.
          Unafraid of getting her hands dirty with data validation and transforming the raw data into insights useful for the clients in forms of efficient reports. 
          Loves working in fast-paced environment and constantly looks out for developing the analytical mindset.
        </p>
      </div>
      {/* <XYPlot width={300} height={300}>
        <VerticalBarSeries
          data={ data }
          color="white" />
        <XAxis />
        <YAxis />
      </XYPlot> */}
    </div>
  );
}

export default About;