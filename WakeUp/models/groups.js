class AlarmGroups {
  constructor(id, name, alarms) {
    this.id = id;
    this.name = name;
    this.alarms = alarms;
  }

  toString() {
    return `${this.name} with ${this.alarms} alarms.`;
  }
}

export default AlarmGroups;
