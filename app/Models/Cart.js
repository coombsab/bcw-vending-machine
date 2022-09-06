export class Cart {
  constructor(total) {
    this.total = total
  }

  calculateTax(taxRate) {
    console.log("calculateTax in model", taxRate)
    if (taxRate > 1) {
      this.taxRate = taxRate - 1
    } else {
      this.taxRate = taxRate
    }
    return this.total * this.taxRate
  }

  get Template() {
    return `
    
    `
  }
}