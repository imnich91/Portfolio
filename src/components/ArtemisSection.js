import React from 'react';
import {Button, Grid} from 'semantic-ui-react';
import ReactPlayer from 'react-player';

class ArtemisSection extends React.Component{
  constructor(props) {
    super(props);
  }

  render = () => (
    <Grid id="projects" className = "smooth">
      <Grid.Row className="artemis-row artemis-area">
        <Grid.Column width  = {10}>
          <div className = "artemis-video">
            <h1 className = "artemis-title">Legend of Artemis and The Emerald Dragon</h1>
            <ReactPlayer url='https://www.youtube.com/watch?v=ALqfjTCvBNU' playing />
          </div>
        </Grid.Column>
        <Grid.Column width = {6} >
            <div className = "artemis-desc">
              <h3>
                Worked on a team of four to develop an HTML5 game at the University of Washington.
                Written primarily in JavaScript. 
              </h3>
              <a className = "artemis-link" href = "https://imnich91.github.io/Legend-of-Artemis/" > Play Legend of Artemis here! </a>
            </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ArtemisSection;
