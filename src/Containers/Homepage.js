import React from 'react';
import TitleSection from '../components/TitleSection';
import ArtemisSection from '../components/ArtemisSection';
import ForteUISection from '../components/ForteUISection';
import {connect} from 'react-redux';


const Homepage = (props) => (
  <div className = "home-wrapper">
    <TitleSection activeItem = {props.activeItem}/>
    <ArtemisSection activeItem = {props.activeItem}/>
    <ForteUISection/>
  </div>
)

const mapStateToProps = (state) => ({activeItem : state.activeItem});
export default connect(mapStateToProps, {})(Homepage);
