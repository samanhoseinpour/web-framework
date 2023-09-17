import axios, { AxiosPromise } from 'axios';

interface hasId {
  id?: number;
}

export class ApiSync<T extends hasId> {
  constructor(public rootUrl: string) {}

  async fetch(id: number): AxiosPromise {
    return await axios.get(`${this.rootUrl}/${id}`);
  }

  async save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return await axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return await axios.post(this.rootUrl, data);
    }
  }
}
