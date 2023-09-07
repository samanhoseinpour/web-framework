import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(userProp: string): string | number {
    return this.data[userProp];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  async fetch(): Promise<void> {
    try {
      const response: AxiosResponse = await axios.get(
        `http://localhost:3000/users/${this.get('id')}`
      );
      this.set(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async save(): Promise<void> {
    const id = this.get('id');

    if (id) {
      await axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      await axios.post('http://localhost:3000/users', this.data);
    }
  }
}
