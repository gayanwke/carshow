import { CARS_LOADED } from "../_constants/constants";

export function carslistReducer(state = {}, action) {
  switch (action.type) {
    case CARS_LOADED:
      return {
        carslist: action.carslist
      };
    default:
      return state;
  }
}
