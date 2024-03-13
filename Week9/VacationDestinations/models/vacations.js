class VacationSpot {
  constructor(
    id,
    countryId,
    name,
    averageCost,
    foundedYear,
    rating,
    imageUrl,
    description
  ) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.averageCost = averageCost;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Average Cost: ${this.averageCost}, Rating: ${this.rating}`;
  }
}

export default VacationSpot;
