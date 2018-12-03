import { FETCH_USER } from '../actions/types';

//State is null, this is the base case -->
// will return the user if ther is a payload
// if no we return false
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
