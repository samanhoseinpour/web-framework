import { View } from './View';
import { User } from '../models/User';

export class UserForm extends View<User> {
  eventMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.update-name': this.updateName,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  updateName = (): void => {
    const input = this.parent.querySelector('input');

    const name = input?.value;

    this.model.set({ name });
  };

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <div>user name: ${this.model.get('name')}</div>
            <div>user age: ${this.model.get('age')}</div>
            <input placeholder='change name'/>   
            <button class="update-name">Update</button> 
            <button class="set-age">Set Random Age</button> 
        </div>
    `;
  }
}
