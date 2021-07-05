import {
  GET_ADDRESS,
  START_FETCHING_ADRESS,
  ERROR_FETCHING_ADRESS,
} from "./constants";
const initialState = {
  data: [],
};
const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_ADRESS:
      return { ...state, status: statusList.process, data: [] };
    case GET_ADDRESS:
      return {
        ...state,
        type: START_FETCHING_ADRESS,
        data: action.data,
        status: statusList.success,
      };
    case ERROR_FETCHING_ADRESS:
      return { ...state, status: statusList.error };

    default:
      return state;
  }
}
export default reducer;
