export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T) {
    for (let data in update) {
      this.data[data] = update[data];
    }
    // ts has no idea whats the type of update (it should be Obj)
    // therefore, we can't use .assign.

    // Object.assign(this.data, update);
  }
}
