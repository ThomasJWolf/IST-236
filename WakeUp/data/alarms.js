import Alarms from "../models/alarms.js";

export const ALARMS = [
  new Alarms(1, "07:00 AM", "Alarm 1", true, [
    true,
    false,
    true,
    false,
    true,
    false,
    true,
  ]),
  new Alarms(2, "09:04 PM", "Now", false, [
    false,
    true,
    false,
    true,
    false,
    true,
    false,
  ]),
  new Alarms(3, "09:00 AM", "Alarm 3", true, [
    true,
    false,
    true,
    false,
    true,
    false,
    true,
  ]),
  new Alarms(4, "09:08 PM", "Alarm 4", true, [
    false,
    false,
    false,
    true,
    false,
    false,
    false,
  ]),
  new Alarms(5, "09:49 PM", "Alarm 5", true, [
    false,
    false,
    false,
    true,
    false,
    false,
    false,
  ]),
  new Alarms(6, "11:21 PM", "Alarm 6", true, [
    false,
    false,
    false,
    true,
    false,
    false,
    false,
  ]),
];
