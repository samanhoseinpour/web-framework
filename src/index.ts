import { User } from './models/User';

const user = new User({ name: 'saman', age: 21 });

user.set({ name: 'sajjad', age: 25 });

console.log(user.get('name'), user.get('age'));
