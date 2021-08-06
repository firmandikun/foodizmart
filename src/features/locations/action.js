import axios from "axios";

import {
  GET_ADDRESS,
  START_FETCHING_ADRESS,
  ERROR_FETCHING_ADRESS,
} from "./constants";



const API_KEY = "AIzaSyCsYC6FnIqhSxbukA13RbwAFLwWtcQBGZY";
export const fecthDataAddress = (value, type) => {
  return (dispatch) => {
    dispatch(startFetchingAdress());
    try {
      var location = "";
      if (type === "address") {
        location = `address=${value}`;
      } else {
        location = `latlng=${value.coordinates.lat},${value.coordinates.lng}`;
      }
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?${location}&key=${API_KEY}&language=ID`
        )
        .then((res) => {
          var address = res.data.results[0].formatted_address;
          var cordinate = {
            latitude: res.data.results[0].geometry.location.lat,
            longitude: res.data.results[0].geometry.location.lng,
          };
          var provinsi = res.data.results[0].address_components.filter((o) =>
            o.types.includes("administrative_area_level_1")
          )[0].long_name;
          var kabupaten = res.data.results[0].address_components.filter((o) =>
            o.types.includes("administrative_area_level_2")
          );
          var kecamatan = res.data.results[0].address_components.filter((o) =>
            o.types.includes("administrative_area_level_3")
          );
          var kelurahan = res.data.results[0].address_components.filter((o) =>
            o.types.includes("administrative_area_level_4")
          );
          var params = {
            address,
            provinsi,
            cordinate,
            kabupaten: kabupaten.length > 0 ? kabupaten[0].long_name : "",
            kecamatan: kecamatan.length > 0 ? kecamatan[0].long_name : "",
            kelurahan: kelurahan.length > 0 ? kelurahan[0].long_name : "",
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
