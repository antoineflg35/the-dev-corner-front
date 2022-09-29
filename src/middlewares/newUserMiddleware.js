import axios from 'axios';
import { CREATE_COUNT } from '../actions/newUser';

const newUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_COUNT:
      axios.post(
        'http://localhost:8001/api/v1/user',
        {
          // on utilise les infos du formulaire : on les récupère dans le state
          // (champs contrôlés). Attention un middleware n'est pas un composant
          // React, donc on ne peut pas utiliser les hooks (useSelector, useDispatch)
          // => store.getState()
          firstname: store.getState().newUser.firstname,
          lastname: store.getState().newUser.lastname,
          pseudo: store.getState().newUser.pseudo,
          email: store.getState().newUser.email,
          password: store.getState().newUser.password,
          department: store.getState().newUser.department,
          description: store.getState().newUser.description,
          tag: store.getState().newUser.tag,
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
        });
      break;
    default:
  }
  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default newUserMiddleware;
