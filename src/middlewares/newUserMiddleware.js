import axios from 'axios';
import {
  CREATE_COUNT, DISPLAY_LIST_DEPARTMENT, FETCH_LIST_TAG, saveDepartment, saveListTag,
} from '../actions/newUser';

const newUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_COUNT:
      axios.post(
        'http://localhost:8001/api/v1/user',
        {
          firstname: store.getState().newUser.firstname,
          lastname: store.getState().newUser.lastname,
          pseudo: store.getState().newUser.pseudo,
          email: store.getState().newUser.email,
          password: store.getState().newUser.password,
          departement_number: store.getState().newUser.department,
          description: store.getState().newUser.description,
          tag: store.getState().newUser.tag_user,
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
    case DISPLAY_LIST_DEPARTMENT:
      axios.get(
        'https://geo.api.gouv.fr/departements',
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveDepartment(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_LIST_TAG:
      axios.get(
        'http://localhost:8001/api/v1/tags',
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveListTag(response.data.tags));
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
