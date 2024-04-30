import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  clockReducer,
  timerReducer,
  stopwatchReducer,
  alarmReducer,
  groupReducer,
} from "./reducers";

// Combine reducers
const rootReducer = combineReducers({
  clocks: clockReducer,
  timers: timerReducer,
  stopwatches: stopwatchReducer,
  alarms: alarmReducer,
  groups: groupReducer,
});

// Configuration for Redux Persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["clocks", "timers", "stopwatches", "alarms", "groups"], // Specify which parts of your state you want to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the thunk middleware
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
