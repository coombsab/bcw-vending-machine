export class Snack {
  /**
   * @param {string} name
   * @param {number} price
   * @param {string} imageURL
   */
  constructor(name, price, imageURL) {
    this.name = name
    this.price = price
    this.imageURL = imageURL
  }

  get Template() {
    return `
      <div class="col-md-5 text-center p-2 bg-success rounded">
        <img src="${this.imageURL}" alt="${this.name}" class="img-fluid mb-2 rounded"></img>
        <div class="d-flex justify-content-between gap-2">
          <div class="text-start">
            <h6>${this.name}</h6>
            <p>$${this.price}</p>
          </div>
          <button class="btn btn-secondary" onclick="app.snacksController.addToTotal('${this.name}')">BUY</button>
        </div>
      </div>
    `
  }
}