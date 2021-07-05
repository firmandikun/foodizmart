import {
  ERROR_FETCHING_PRODUCT,
  START_FETCHING_PRODUCT,
  SUCCESS_FETCHING_PRODUCT,
} from "./constants";
const initialState = {
  data : []

};
const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_PRODUCT:
      return {
        ...state,
        status: statusList.process,
        data: [],
      };
    case SUCCESS_FETCHING_PRODUCT:
      return {
         ...state,
         data : action.data
      };
    case ERROR_FETCHING_PRODUCT:
      return {
        ...state,
        status: statusList.error,
        
      };
    default:
      return state;
  }
}
export default reducer;
