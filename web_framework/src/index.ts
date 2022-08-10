import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const root = document.getElementById('root');
const user = User.buildUser({ name: 'Gabi', age: 3 });
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
}
