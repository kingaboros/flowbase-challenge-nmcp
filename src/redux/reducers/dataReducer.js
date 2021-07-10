import { REQUEST_API_DATA } from '../actions/actions';

const initialState = {
  rooms: [],
};
const dataReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case REQUEST_API_DATA:
      return { ...state, rooms: data };
    default:
      return state;
  }
};

export default dataReducer;
