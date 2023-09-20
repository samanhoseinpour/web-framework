import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.update-name': this.updateName,
      'click:.save-model': this.saveUser,
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

  saveUser = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <input placeholder='${this.model.get('name')}'/>   
      <button class="update-name">Update</button> 
      <button class="set-age">Set Random Age</button> 
      <button class="save-model">Save</button>
    `;
  }
}
