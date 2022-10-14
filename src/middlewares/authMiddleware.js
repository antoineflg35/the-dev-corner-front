import axios from 'axios';
import {
  LOGIN, LOGIN_TOKEN, saveUserToken, saveUserPseudo, loginToken, LOGIN_BACK_OFFICE, wrongLogin
} from '../actions/user';

const authMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOGIN:
      axios.post(
        'https://the-dev-corner.herokuapp.com/api/v1/login_check',
        {
          username: store.getState().user.username,
          password: store.getState().user.password,
        },

      )
        .then((response) => {
          store.dispatch(saveUserToken(response.data.token));
          // const localstorage = localStorage.setitem('token',action.token);
        })
        .then(() => {
          store.dispatch(loginToken());
          console.log(store.getState().user);
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(wrongLogin());
        });
      break;
    case LOGIN_TOKEN:
      axios.get(
        'https://the-dev-corner.herokuapp.com/api/v1/user/connected',
        {
          headers: {
            Authorization: `bearer ${store.getState().user.token}`,
            // Authorization: store.getState().user.token,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserPseudo(
            response.data.pseudo,
            response.data.departement_number,
            response.data.tags,
            response.data.is_verified,
            response.data.roles[0],
          ));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    // case LOGIN_BACK_OFFICE:
    //   axios.get(
    //     'http://localhost:8001/api/v1/back',
    //     {
    //       headers: {
    //         Authorization: `bearer ${store.getState().user.token}`,
    //         // Authorization: store.getState().user.token,
    //       },
    //     },
    //   )
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default authMiddleware;
