import { User } from './models/User';

const user = new User({ name: 'saman', age: 21 });

console.log(user.getUserData('name'), user.getUserData('age'));
