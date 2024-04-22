import {TOGGLE_TIMERS, INITIALIZE_TIMERS, ADD_TIMER, DELETE_TIMER, UPDATE_TIMER} from "../actions";


const initialState = {
  timers: [],
};

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TIMER":
      return { ...state, timers: [...state.timers, action.payload] };
    case "DELETE_TIMER":
      return {
        ...state,
        timers: state.timers.filter((timer) => timer.id !== action.payload),
      };
    case "UPDATE_TIMER":
      return {
        ...state,
        timers: state.timers.map((timer) =>
          timer.id === action.payload.id
            ? { ...timer, ...action.payload }
            : timer
        ),
      };
    case "TOGGLE_TIMER":
      return {
        ...state,
        timers: state.timers.map((timer) =>
          timer.id === action.payload
            ? { ...timer, active: !timer.active }
            : timer
        ),
      };
    default:
      return state;
  }
};
