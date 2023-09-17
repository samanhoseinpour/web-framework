import { User } from './models/User';

const user = new User({ name: 'hosein', age: 40 });

user.on('saved', () => {
  console.log(user);
});

user.save();
