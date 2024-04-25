class AlarmGroups {
  constructor(id, name, alarmList) {
    this.id = id;
    this.name = name;
    this.alarmList = alarmList;
  }

  toString() {
    return `${this.name} with ${this.alarmList} alarmList.`;
  }
}

export default AlarmGroups;
