interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  getUserData(userProp: string): string | number {
    return this.data[userProp];
  }

  setUserData(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
