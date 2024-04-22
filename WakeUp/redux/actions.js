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

export const addTimer = (newTimerData) => (dispatch, getState) => {
  const state = getState();
  const currentTimers = state.timers.timers;

  // Find the maximum ID in the current timers array
  const maxId = currentTimers.reduce(
    (max, timer) => Math.max(max, timer.id),
    0
  );
  const newId = maxId + 1; // Increment the maximum ID to get a new unique ID
  console.log("New ID:", newId);

  const newTimer = {
    ...newTimerData,
    id: newId, // Set the new unique ID
    status: false, // Default status
  };

  dispatch({
    type: ADD_TIMER,
    payload: newTimer,
  });
};

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

