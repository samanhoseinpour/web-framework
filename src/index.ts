import { User } from './models/User';

const user = new User({ name: 'ali', age: 21 });
user.sync.fetch(2);
