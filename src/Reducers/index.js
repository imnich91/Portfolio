import { combineReducers } from 'redux';
import {NavItemReducer} from './NavItemReducer';

const rootReducer = combineReducers({
  activeItem : NavItemReducer,
});

export default rootReducer;
