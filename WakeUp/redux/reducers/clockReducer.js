import {
  TOGGLE_CLOCK,
  INITIALIZE_CLOCKS,
} from "../actions";

const initialState = {
  clocks: [],
};

export const clockReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_CLOCKS:
      return {
        ...state,
        clocks: action.payload,
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

