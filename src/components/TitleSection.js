import React from 'react';
import {Button} from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

class TitleSection extends React.Component{
  constructor(props) {
    super(props);
  }

  render = () => (
    <div id="title" className = "title-area smooth">

      <div className = "css-typing">
        <h1>
          Hello, my name is Ian Nicholas and I am a Software Developer!
        </h1>
      </div>
    </div>
  )
}


export default TitleSection;
