import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  LOGIN, LOGIN_TOKEN, saveUserToken, saveUserPseudo,
} from '../actions/user';

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
          store.dispatch(saveUserToken(response.data.token));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case LOGIN_TOKEN:
      axios.get(
        'http://localhost:8001/api/v1/user/connected',
        {
          headers: {
            Authorization: `bearer ${store.getState().user.token}`,
            // Authorization: store.getState().user.token,
          },
        },
      )
        .then((response) => {
          console.log(response.data);

          store.dispatch(saveUserPseudo(response.data.pseudo));
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
