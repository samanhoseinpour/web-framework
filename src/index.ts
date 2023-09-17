import { User } from './models/User';

const user = new User({ name: 'saman', age: 22 });

user.on('change', () => {
  console.log('user was changed.');
});

user.set({ name: 'sajjad' });

console.log(user.get('name'));
