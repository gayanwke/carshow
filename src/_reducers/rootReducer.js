import { combineReducers } from "redux";
import { carslistReducer } from "./carslistReducer";

export default combineReducers({
  carslist: carslistReducer
});
