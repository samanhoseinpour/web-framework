interface HasOn {
  on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends HasOn> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  abstract eventMap(): { [key: string]: () => void };
  abstract template(): string;

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
