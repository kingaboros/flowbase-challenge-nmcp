import { RECEIVE_API_DATA } from '../actions/actions';

const initialState = {
  rooms: [],
};
export default (state = initialState, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return { ...state, rooms: data };
    default:
      return state;
  }
};
