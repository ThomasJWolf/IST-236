class Timers {
    constructor(
      id,
      title,
      description,
      time,
      status

    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.time = time;
      this.status = status;
      
    }
  
    toString() {
      return `${this.title} for ${this.time}`;
    }
  }
  
  export default Timers;
  