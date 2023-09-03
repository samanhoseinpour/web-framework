import { User } from './models/User';

const user = new User({ name: 'saman', age: 21 });

user.setUserData({ name: 'sajjad', age: 25 });

console.log(user.getUserData('name'), user.getUserData('age'));
