import  Carousel  from 'nuka-carousel';
import React from 'react';
import {Button, Grid, Image} from 'semantic-ui-react';

class ForteUISection extends React.Component{
  constructor(props) {
    super(props);
  }

  render = () => (
    <Grid >
      <Grid.Row className="forte-area">
        <Grid.Column width  = {10} className = "forte-video">
          <h1 className = "forte-title">Forte UI - IMS Health</h1>
          <Carousel>
            <img src="src/images/UI home.png"/>
            <img src="src/images/Components.png"/>
            <img src="src/images/Calendar.png"/>
          </Carousel>
        </Grid.Column>
        <Grid.Column width = {6} >
            <div className = "forte-description">
              <h3>
                Front end UI created with React and Redux.
                Used HTTP requests to populate data. 
              </h3>
            </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ForteUISection;
