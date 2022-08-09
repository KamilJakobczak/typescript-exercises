import { User } from './models/User';
import { UserForm } from './views/UserForm';

const element = document.getElementById('root');
const user = User.buildUser({ name: 'Gabi', age: 3 });
if (!element) {
} else {
  const userForm = new UserForm(element, user);
  userForm.render();
}
