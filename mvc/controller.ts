export class Controller {
  constructor(view, eventBus) {
    eventBus.on();
    view.render();
  }
}