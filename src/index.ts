import { User } from './models/User';

const user = new User({ name: 'saman', age: 21 });

user.on('onClick', () => {
  console.log('User clicked.');
});

user.on('onSave', () => {
  console.log('User saved something.');
});

user.on('onChange', () => {
  console.log('User changed something.');
});

user.trigger('onClick');
user.trigger('onSave');
user.trigger('onChange');
