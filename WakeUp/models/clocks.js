class Clocks {
    constructor(
      id,
      timezone,
      time,
      date

    ) {
      this.id = id;
      this.timezone = timezone;
      this.time = time;
      this.date = date;
      
    }
  
    toString() {
      return `${this.timezone} at ${this.time}, ${this.date}`;
    }
  }
  
  export default Clocks;
  