import { View } from "./view";
import { Controller } from "./controller";
import { EventBus } from "./eventBus";

class Main {
  private eventBus = new EventBus();
  private view = new View(this.eventBus);
  private controller = new Controller(this.view, this.eventBus);
  constructor() {
  }
}