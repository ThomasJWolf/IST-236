class Timers {
    constructor(
      id,
      title,
      description,
      time,
      timeLeft,
      status

    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.time = time;
      this.timeLeft = timeLeft;
      this.status = status;
      
    }
  
    toString() {
      return `${this.title} for ${this.time}`;
    }
  }
  
  export default Timers;
  