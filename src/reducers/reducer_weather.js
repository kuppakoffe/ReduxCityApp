import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action) {
  // console.log('Action recieved ', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // console.log(state);

      return [action.payload.data, ...state];

    default:
      return state;
  }
  return state;
}
