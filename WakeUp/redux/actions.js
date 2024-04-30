import { CLOCKS } from "../data/clocks"; // Adjust the path as necessary
import { TIMERS } from "../data/timers"; // Adjust the path as necessary
import { STOPWATCHES } from "../data/stopwatches"; // Adjust the path as necessary
import { ALARMS } from "../data/alarms"; // Adjust the path as necessary
import { ALARM_GROUPS } from "../data/groups"; // Adjust the path as necessary

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

export const INITIALIZE_STOPWATCHES = "INITIALIZE_STOPWATCHES";
export const TOGGLE_STOPWATCHES = "TOGGLE_STOPWATCHES";
export const ADD_STOPWATCHES = "ADD_STOPWATCHES";
export const DELETE_STOPWATCHES = "DELETE_STOPWATCHES";
export const UPDATE_STOPWATCHES = "UPDATE_STOPWATCHES";
export const ADD_STOPWATCHES_STEP = "ADD_STOPWATCHES_STEP";

export const initializeStopwatches = () => ({
  type: INITIALIZE_STOPWATCHES,
  payload: STOPWATCHES,
});

// Action Creators
export const toggleStopwatch = (id) => ({
  type: TOGGLE_STOPWATCHES,
  payload: id,
});

// Action Creators
export function addStopwatch(stopwatch) {
  return {
    type: 'ADD_STOPWATCHES',
    payload: stopwatch
  };
}

// Action to delete a stopwatch
export const deleteStopwatch = (id) => ({
  type: DELETE_STOPWATCHES,
  payload: id,
});

// Action to update a stopwatch
export const updateStopwatch = (stopwatch) => ({
  type: UPDATE_STOPWATCHES,
  payload: stopwatch,
});

// Action to add a step to a stopwatch
export const addStopwatchStep = (stopwatch) => ({
  type: ADD_STOPWATCHES_STEP,
  payload: stopwatch,
});


export const INITIALIZE_ALARMS = "INITIALIZE_ALARMS";
export const TOGGLE_ALARMS = "TOGGLE_ALARMS";
export const ADD_ALARMS = "ADD_ALARMS";
export const DELETE_ALARMS = "DELETE_ALARMS";
export const UPDATE_ALARMS = "UPDATE_ALARMS";
export const ADD_ALARMS_STEP = "ADD_ALARMS_STEP";

export const initializeAlarms = () => ({
  type: INITIALIZE_ALARMS,
  payload: ALARMS,
});

// Action Creators
export const toggleAlarm = (id) => ({
  type: TOGGLE_ALARMS,
  payload: id,
});

// Action Creators
export function addAlarm(alarm) {
  return {
    type: 'ADD_ALARMS',
    payload: alarm
  };
}

// Action to delete an alarm
export const deleteAlarm = (id) => ({
  type: DELETE_ALARMS,
  payload: id,
});

// Update details of an alarm
export const updateAlarm = (id, updates) => ({
  type: UPDATE_ALARMS,
  payload: { id, updates },
});

// Action to add a step to an alarm
export const addAlarmStep = (alarm) => ({
  type: ADD_ALARMS_STEP,
  payload: alarm,
});

export const INITIALIZE_GROUPS = "INITIALIZE_GROUPS";
export const TOGGLE_GROUPS = "TOGGLE_GROUPS";
export const ADD_GROUPS = "ADD_GROUPS";
export const DELETE_GROUPS = "DELETE_GROUPS";
export const UPDATE_GROUPS = "UPDATE_GROUPS";
export const ADD_GROUPS_STEP = "ADD_GROUPS_STEP";
export const ADD_GROUPS_ALARM = "ADD_GROUPS_ALARM";
export const REMOVE_GROUPS_ALARM = "REMOVE_GROUPS_ALARM";

export const initializeGroups = () => ({
  type: INITIALIZE_GROUPS,
  payload: ALARM_GROUPS,
});

// Action Creators
export const toggleGroup = (id) => ({
  type: TOGGLE_GROUPS,
  payload: id,
});

// Action Creators
export function addGroup(group) {
  return {
    type: 'ADD_GROUPS',
    payload: group
  };
}

// Action to delete a group
export const deleteGroup = (id) => ({
  type: DELETE_GROUPS,
  payload: id,
});

// Action to update a group
export const updateGroup = (id, updates) => ({
  type: UPDATE_GROUPS,
  payload: { id, updates },
});

// Action to add a step to a group

export const addGroupStep = (group) => ({
  type: ADD_GROUPS_STEP,
  payload: group,
});

// Action to add an alarm to a group
export const addGroupAlarm = (id, alarmId) => ({
  type: ADD_GROUPS_ALARM,
  payload: { id, alarmId },
});

export const removeGroupAlarm = (id, alarmId) => ({
  type: "REMOVE_GROUPS_ALARM",
  payload: { id, alarmId },
});