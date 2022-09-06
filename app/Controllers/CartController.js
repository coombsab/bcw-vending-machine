import { cartService } from "../Services/CartService.js"

export class CartController {

  constructor() {
    _drawCart()
  }
  calculateTax() {
    console.log("calculateTax in controller")
    cartService.calculateTax()
  }
}

function _drawCart() {
  console.log("drawing the cart")
}