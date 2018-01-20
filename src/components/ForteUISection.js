import  Carousel  from 'nuka-carousel';
import React from 'react';
import {Button, Grid} from 'semantic-ui-react';

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
            <img src="./images/UI home.png"/>
            <img src="./images/Components.png"/>
            <img src="./images/Calendar.png"/>
          </Carousel>
        </Grid.Column>
        <Grid.Column width = {6} >
            <div className = "forte-description">
              <h3>
                Developed a UI that monitored and created jobs to migrate accounts to Amazon Redshift.
                Created with React.js and used Redux to manage the state of the application.
                Used HTTP requests to interact with a REST API to pull data from an RDS.
              </h3>
            </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ForteUISection;
