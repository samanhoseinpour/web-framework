import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const userCollection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json)
);

userCollection.on('change', () => {
  console.log(userCollection);
});

userCollection.fetch();
