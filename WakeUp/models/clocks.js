class Clocks {
    constructor(
      id,
      name,
      timezone,
      active

    ) {
      this.id = id;
      this.name = name;
      this.timezone = timezone;
      this.active = active;
      
    }
  
    toString() {
      return `${this.name} - ${this.timezone}`;
    }
  }
  
  export default Clocks;
  