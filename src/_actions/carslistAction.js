import { CARS_LOADED, CARS_LOADING_FAILURE } from "../_constants/constants";
import Axios from "axios";

const apiUrl =
  "https://eacodingtest.digital.energyaustralia.com.au/api/v1/cars";

export function getCarsList() {
  //thunk action
  //Api call for get cars list.
  return dispatch => {
    Axios.get(apiUrl).then(
      result => {
        dispatch(success(result.data));
      },
      error => {
        dispatch(failure(error.toString()));
      }
    );
  };
}

function success(carslist) {
  return {
    type: CARS_LOADED,
    carslist
  };
}

function failure(error) {
  return { type: CARS_LOADING_FAILURE, error };
}
