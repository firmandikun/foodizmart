import axios from "axios";

import {
  GET_ADDRESS,
  START_FETCHING_ADRESS,
  ERROR_FETCHING_ADRESS,
} from "./constants";

const API_KEY = "AIzaSyCsYC6FnIqhSxbukA13RbwAFLwWtcQBGZY";
export const fecthDataAddress = (location) => {
  return (dispatch) => {
    dispatch(startFetchingAdress());
    try {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coordinates.lat},${location.coordinates.lng}&key=${API_KEY}&language=ID`
        )
        .then((res) => {
          var address = res.data.results[0].formatted_address;
          var provinsi = res.data.results[0].address_components.filter((o) =>
            o.types.includes("administrative_area_level_1")
          )[0].long_name;
          var kabupaten = res.data.results[0].address_components.filter((o) =>
            o.types.includes("administrative_area_level_2")
          )[0].long_name;
          var kecamatan = res.data.results[0].address_components.filter((o) =>
            o.types.includes("administrative_area_level_3")
          )[0].long_name;
          var kelurahan = res.data.results[0].address_components.filter((o) =>
            o.types.includes("administrative_area_level_4")
          )[0].long_name;

          var params = {
            address,
            provinsi,
            kabupaten,
            kecamatan,
            kelurahan,
          };
          dispatch(successFetchingAdress(params));
        });
    } catch {
      dispatch(errorFetchingAdress());
    }
  };
};

export const startFetchingAdress = () => {
  return {
    type: START_FETCHING_ADRESS,
  };
};
export const successFetchingAdress = (payload) => {
  return {
    type: GET_ADDRESS,
    data: payload,
    ...payload,
  };
};
export const errorFetchingAdress = () => {
  return {
    type: ERROR_FETCHING_ADRESS,
  };
};
