import AlarmGroups from "../models/groups.js";

export const ALARM_GROUPS = [
  new AlarmGroups(0, "  0  ", []),
  new AlarmGroups(1, "Group 1", [1]),
  new AlarmGroups(2, "Group 2", [1, 2]),
  new AlarmGroups(3, "Group 3", [1, 2, 3]),
  new AlarmGroups(4, "Group 4", [1, 2, 3, 4]),
  new AlarmGroups(5, "Group 5", [1, 2, 3, 4, 5]),
  new AlarmGroups(6, "Group 6", [1, 2, 3, 4, 5, 6]),
  new AlarmGroups(7, "Group 7", [1, 2, 3, 4, 5, 6, 7]),
  new AlarmGroups(8, "Group 8", [1, 2, 3, 4, 5, 6, 7, 8]),
  new AlarmGroups(9, "Group 9", [1, 3, 5, 7, 9]),
  new AlarmGroups(10, "Group 10", [2, 4, 7, 10]),
];
