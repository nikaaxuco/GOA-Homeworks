
class Flight {
  constructor(flightId, status) {
    this.flightId = flightId;
    this.status = status;
  }

  displayFlightInfo() {
    return `Flight ${this.flightId} is ${this.status}`;
  }
}


let flight = new Flight("AA123", "landed on time");