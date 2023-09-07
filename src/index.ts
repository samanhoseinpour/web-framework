import { User } from './models/User';

const user = new User({ id: 1 });

user.save();

user.events.on('change', () => {
  console.log('change!');
});
user.events.trigger('change');

user.events.on('click', () => {
  console.log('clicked!');
});
user.events.trigger('click');
