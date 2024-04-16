class Alarms {
  constructor(id, time, name, active, days) {
    this.id = id;
    this.time = time;
    this.name = name;
    this.active = active;
    this.days = days;
  }

  toString() {
    return `${this.time} for ${this.name} with ${this.days} days.`;
  }
}

export default Alarms;
