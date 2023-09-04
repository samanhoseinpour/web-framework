import { User } from './models/User';

const user = new User({ name: 'saman', age: 21 });

user.on('onClick', () => {});

console.log(user);
