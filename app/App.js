import { CartController } from "./Controllers/CartController.js";
import { SnacksController } from "./Controllers/SnacksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  snacksController = new SnacksController();
  cartController = new CartController();
}

window["app"] = new App();
