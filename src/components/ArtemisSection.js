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
                Worked on a team of four to develop an HTML5 game for one of my courses at UWT.
                Role-playing game where Artemis has to save the princess from the evil dragon.
                The game can be played here:
              </h3>
              <a className = "artemis-link" href = "https://imnich91.github.io/Legend-of-Artemis/" > https://imnich91.github.io/Legend-of-Artemis/ </a>
            </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ArtemisSection;
