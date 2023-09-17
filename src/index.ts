import { User } from './models/User';

const user = User.buildUser({ id: 3 });

user.on('change', () => {
  console.log('user was changed');
});

user.fetch();

console.log(user);
