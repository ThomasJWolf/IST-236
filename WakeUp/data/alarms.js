import Alarms from "../models/alarms.js";

export const ALARMS = [
  new Alarms(1, "07:47", "Alarm 1", true, [
    true,
    false,
    true,
    false,
    true,
    false,
    true,
  ]),
  new Alarms(2, "17:47", "Now", true, [
    false,
    true,
    false,
    true,
    false,
    true,
    true,
  ]),
];
