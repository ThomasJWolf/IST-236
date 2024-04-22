import {
  TOGGLE_CLOCK,
  INITIALIZE_CLOCKS,
  TOGGLE_TIMERS,
  INITIALIZE_TIMERS,
  ADD_TIMER,
  DELETE_TIMER,
  UPDATE_TIMER,
} from "./actions";

const initialClockState = {
  clocks: [],
};

const initialTimerState = {
  timers: [],
};

export const clockReducer = (state = initialClockState, action) => {
  switch (action.type) {
    case INITIALIZE_CLOCKS:
      return {
        ...state,
        clocks: action.payload.map((clock) => ({
          id: clock.id,
          name: clock.name,
          timezone: clock.timezone,
          active: clock.active,
        })),
      };
    case TOGGLE_CLOCK:
      return {
        ...state,
        clocks: state.clocks.map((clock) =>
          clock.id === action.payload
            ? { ...clock, active: !clock.active }
            : clock
        ),
      };
    default:
      return state;
  }
};

export const timerReducer = (state = initialTimerState, action) => {
  switch (action.type) {
    case INITIALIZE_TIMERS:
      return {
        ...state,
        timers: action.payload,
      };
    case ADD_TIMER:
      console.log(
        "Current State before add:",
        JSON.stringify(state.timers, null, 2)
      );
      console.log("Adding Timer:", JSON.stringify(action.payload, null, 2));
      const updatedTimers = [...state.timers, action.payload];
      console.log("State after add:", JSON.stringify(updatedTimers, null, 2));
      return {
        ...state,
        timers: updatedTimers,
      };
    case DELETE_TIMER:
      return {
        ...state,
        timers: state.timers.filter((timer) => timer.id !== action.payload),
      };
    case UPDATE_TIMER:
      return {
        ...state,
        timers: state.timers.map((timer) =>
          timer.id === action.payload.id
            ? { ...timer, ...action.payload }
            : timer
        ),
      };
    case TOGGLE_TIMERS:
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
