export class UserForm {
  constructor(public parent: Element) {}

  eventMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onClickButton,
    };
  }

  onClickButton(): void {
    console.log('button was clicked');
  }

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <input />   
            <button>Click Me</button> 
        </div>
    `;
  }

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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
