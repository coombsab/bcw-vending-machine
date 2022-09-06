import { appState } from "../AppState.js"

class CartService {

  calculateTax() {
    console.log("calculateTax in service", appState.cart.calculateTax(appState.taxRate))
    
  }

}

export const cartService = new CartService()