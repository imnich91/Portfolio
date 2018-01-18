import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {setActiveItem} from '../Actions';




class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Navbar activeItem = {this.props.activeItem} setActiveItem = {this.props.setActiveItem}/>
        <div className = "wrapper">
          <Homepage/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({activeItem : state.activeItem});


export default connect(mapStateToProps, {setActiveItem})(App);
