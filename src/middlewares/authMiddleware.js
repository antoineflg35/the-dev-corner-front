import axios from 'axios';
import { LOGIN, saveDataUser } from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      axios.post(
        'http://localhost:8001/api/v1/login_check',
        {
          username: store.getState().user.username,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveDataUser(response.data.pseudo, response.data.token));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default authMiddleware;
