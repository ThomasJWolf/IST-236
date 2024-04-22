import { CLOCKS } from "../data/clocks"; // Adjust the path as necessary
import { TIMERS } from "../data/timers"; // Adjust the path as necessary

export const INITIALIZE_CLOCKS = "INITIALIZE_CLOCKS";
export const TOGGLE_CLOCK = "TOGGLE_CLOCK";

export const initializeClocks = () => ({
  type: INITIALIZE_CLOCKS,
  payload: CLOCKS,
});



// Action Creators
export const toggleClock = (id) => ({
  type: TOGGLE_CLOCK,
  payload: id,
});

export const INITIALIZE_TIMERS = "INITIALIZE_TIMERS";
export const TOGGLE_TIMERS = "TOGGLE_TIMERS";
export const ADD_TIMER = "ADD_TIMER";
export const DELETE_TIMER = "DELETE_TIMER";
export const UPDATE_TIMER = "UPDATE_TIMER";
export const ADD_TIMER_STEP = "ADD_TIMER_STEP";


export const initializeTimers = () => ({
  type: INITIALIZE_TIMERS,
  payload: TIMERS,
});

// Action Types

// Action Creators
export const toggleTimer = (id) => ({
  type: TOGGLE_TIMERS,
  payload: id,
});

// Action Creators
export function addTimer(timer) {
  return {
    type: 'ADD_TIMER',
    payload: timer
  };
}


// Action to delete a timer
export const deleteTimer = (id) => ({
  type: DELETE_TIMER,
  payload: id,
});

// Action to update a timer
export const updateTimer = (timer) => ({
  type: UPDATE_TIMER,
  payload: timer,
});

