import axios from 'axios';
import {
  LOGIN, LOGIN_TOKEN, saveUserToken, saveUserPseudo, loginToken,
} from '../actions/user';

const authMiddleware = (store) => (next) => async (action) => {
  // const client = axios.create({
  //   baseURL: 'https://localhost:8001',
  // });
  switch (action.type) {
    case LOGIN:
    //   await client.post(
    //     '/api/v1/login_check',
    //     {
    //       username: store.getState().user.username,
    //       password: store.getState().user.password,
    //     },
    //   )
    //     .then((response) => {
    //       store.dispatch(saveUserToken(response.data.token));
    //     });
    //   break;
    // case LOGIN_TOKEN:
    //   await client.get(
    //     '/api/v1/user/connected',
    //     {
    //       headers: {
    //         Authorization: `bearer ${store.getState().user.token}`,

      //       },
      //     },
      //   )
      //     .then((response) => {
      //       store.dispatch(saveUserPseudo(response.data.pseudo));
      //     });
      //   break;
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
        .then(() => {
          store.dispatch(loginToken());
          console.log(store.getState().user);
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
          console.log(response.data.tags[0].techno);
          store.dispatch(saveUserPseudo(
            response.data.pseudo,
            response.data.departement_number,
            response.data.tags[0].techno,
          ));
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
