import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const root = document.querySelector('#root');

const user = User.buildUser({ name: 'NAME', age: 21 });

if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root element not found!');
}
