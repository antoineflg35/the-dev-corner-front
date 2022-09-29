import axios from 'axios';
import { LOGIN } from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      axios.post(
        'http://localhost:8001/api/v1/login_check',
        {
          // on utilise les infos du formulaire : on les récupère dans le state
          // (champs contrôlés). Attention un middleware n'est pas un composant
          // React, donc on ne peut pas utiliser les hooks (useSelector, useDispatch)
          // => store.getState()
          username: store.getState().user.username,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          // console.log(response);
          // conseil : vérifier qu'on cible bien les infos dans la réponse
          // avec un console.log avant d'écrire le dispatch
          // console.log(response);
          console.log(response);
          // store.dispatch(saveDataUser());
        })
        .catch((error) => {
          console.log(error);
          console.log(store.getState().user.username);
          console.log(store.getState().user.password);
        });
      break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default authMiddleware;