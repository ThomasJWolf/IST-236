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
  new Alarms(2, "08:00 AM", "Alarm 2", false, [
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
  new Alarms(4, "10:00 AM", "Alarm 4", false, [
    false,
    true,
    false,
    true,
    false,
    true,
    false,
  ]),
  new Alarms(5, "11:00 AM", "Alarm 5", true, [
    true,
    false,
    true,
    false,
    true,
    false,
    true,
  ]),
  new Alarms(6, "12:00 PM", "Alarm 6", false, [
    false,
    true,
    false,
    true,
    false,
    true,
    false,
  ]),
  new Alarms(7, "01:00 PM", "Alarm 7", true, [
    true,
    false,
    true,
    false,
    true,
    false,
    true,
  ]),

  new Alarms(8, "02:00 PM", "Alarm 8", false, [
    false,
    true,
    false,
    true,
    false,
    true,
    false,
  ]),
];
