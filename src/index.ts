import { UserForm } from './views/UserForm';
import { User } from './models/User';

const root = document.querySelector('#root');

const user = User.buildUser({ name: 'NAME', age: 21 });

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root element not found!');
}
