import {
  SET_ACTIVE_ITEM
} from '../Actions';

const initialActiveItem = 'home';

export const NavItemReducer = (state = initialActiveItem, action) => {
  switch(action.type) {
    case SET_ACTIVE_ITEM:
      return action.payload;
  }

  return state;
}
