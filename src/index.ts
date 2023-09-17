import { User } from './models/User';

const user = new User({ name: 'saman', age: 21 });

user.on('change', () => {
  console.log('user was changed.');
});

user.trigger('change');
