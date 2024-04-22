import Timers from "../models/timers.js";

export const TIMERS = [
  new Timers(0, "Timer 0", "Timer 0 Description", 5, 5, false),

  new Timers(1, "Timer 1", "Timer 1 Description", 60, 60, false),
  new Timers(2, "Timer 2", "Timer 2 Description", 120, 120, false),
  new Timers(3, "Timer 3", "Timer 3 Description", 180, 180, false),
  new Timers(4, "Timer 4", "Timer 4 Description", 240, 240, false),
];
