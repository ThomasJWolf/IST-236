import {
  TOGGLE_CLOCK,
  INITIALIZE_CLOCKS,
  TOGGLE_TIMERS,
  INITIALIZE_TIMERS,
  ADD_TIMER,
  DELETE_TIMER,
  UPDATE_TIMER,
  TOGGLE_STOPWATCHES,
  INITIALIZE_STOPWATCHES,
  ADD_STOPWATCHES,
  DELETE_STOPWATCHES,
  UPDATE_STOPWATCHES,
  ADD_STOPWATCHES_STEP,
  INITIALIZE_ALARMS,
  TOGGLE_ALARMS,
  ADD_ALARM,
  DELETE_ALARM,
  UPDATE_ALARM,
  ADD_ALARM_STEP,
  INITIALIZE_GROUPS,
  TOGGLE_GROUPS,
  ADD_GROUP,
  DELETE_GROUP,
  UPDATE_GROUP,
  ADD_GROUP_STEP,
} from "./actions";

const initialClockState = {
  clocks: [],
};

const initialTimerState = {
  timers: [],
};

const initialStopwatchState = {
  stopwatches: [],
};

const initialAlarmState = {
  alarms: [],
};

const initialGroupState = {
  groups: [],
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

export const stopwatchReducer = (state = initialStopwatchState, action) => {
  switch (action.type) {
    case INITIALIZE_STOPWATCHES:
      return {
        ...state,
        stopwatches: action.payload,
      };
    case ADD_STOPWATCHES:
      return {
        ...state,
        stopwatches: [...state.stopwatches, action.payload],
      };
    case DELETE_STOPWATCHES:
      return {
        ...state,
        stopwatches: state.stopwatches.filter(
          (stopwatch) => stopwatch.id !== action.payload
        ),
      };
    case UPDATE_STOPWATCHES:
      return {
        ...state,
        stopwatches: state.stopwatches.map((stopwatch) =>
          stopwatch.id === action.payload.id
            ? { ...stopwatch, ...action.payload }
            : stopwatch
        ),
      };
    case TOGGLE_STOPWATCHES:
      return {
        ...state,
        stopwatches: state.stopwatches.map((stopwatch) =>
          stopwatch.id === action.payload
            ? { ...stopwatch, active: !stopwatch.active }
            : stopwatch
        ),
      };
    default:
      return state;
  }
}

export const alarmReducer = (state = initialAlarmState, action) => {
  switch (action.type) {
    case INITIALIZE_ALARMS:
      return {
        ...state,
        alarms: action.payload,
      };
    case ADD_ALARM:
      return {
        ...state,
        alarms: [...state.alarms, action.payload],
      };
    case DELETE_ALARM:
      return {
        ...state,
        alarms: state.alarms.filter(
          (alarm) => alarm.id !== action.payload
        ),
      };
    case UPDATE_ALARM:
      return {
        ...state,
        alarms: state.alarms.map((alarm) =>
          alarm.id === action.payload.id
            ? { ...alarm, ...action.payload }
            : alarm
        ),
      };
    case TOGGLE_ALARMS:
      return {
        ...state,
        alarms: state.alarms.map((alarm) =>
          alarm.id === action.payload
            ? { ...alarm, active: !alarm.active }
            : alarm
        ),
      };
    default:
      return state;
  }
}

export const groupReducer = (state = initialGroupState, action) => {
  switch (action.type) {
    case INITIALIZE_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter(
          (group) => group.id !== action.payload
        ),
      };
    case UPDATE_GROUP:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === action.payload.id
            ? { ...group, ...action.payload }
            : group
        ),
      };
    case TOGGLE_GROUPS:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === action.payload
            ? { ...group, active: !group.active }
            : group
        ),
      };
    default:
      return state;
  }
}