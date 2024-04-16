class Stopwatches {
    constructor(
      id,
      title,
      time,
      laps,
      status

    ) {
      this.id = id;
      this.title = title;
      this.time = time;
      this.laps = laps;
      this.status = status;
      
    }
  
    toString() {
      return `${this.title} for ${this.time} with ${this.laps} laps.`;
    }
  }
  
  export default Stopwatches;
  