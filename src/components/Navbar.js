import {Menu} from 'semantic-ui-react';
import React from 'react';
import {withRouter} from "react-router-dom";

class Navbar extends React.Component{
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div className = "menu">
      <Menu primary>
        <Menu.Item name='home' active={this.props.activeItem === 'home'} href="#title" />
        <Menu.Item name='about' active={this.props.activeItem === 'about'} href = "#about"/>
        <Menu.Item name='projets' active={this.props.activeItem === 'projects'} href = "#projects"/>
      </Menu>
      </div>
    )

  }

}

export default withRouter(Navbar);
