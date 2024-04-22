import { combineReducers } from "redux";
import clockReducer from "./clockReducer";
import timerReducer from "./timerReducer";

const rootReducer = combineReducers({
  clocks: clockReducer,
  timers: timerReducer,
  // other reducers can be added here
});

export default rootReducer;
