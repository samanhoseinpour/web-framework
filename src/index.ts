import { User } from './models/User';

const user = new User({ name: 'saman hoseinpour', age: 21 });

user.save();
