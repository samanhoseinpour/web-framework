import { User } from './models/User';

const userCollection = User.buildCollection();

userCollection.on('change', () => {
  console.log(userCollection);
});

userCollection.fetch();
