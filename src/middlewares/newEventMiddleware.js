// /* eslint-disable no-case-declarations */
// import axios from 'axios';
// import { ADD_EVENT } from '../actions/events';

// const newEventMiddleware = (store) => (next) => (action) => {
//   switch (action.type) {
//     case ADD_EVENT:
//       axios({
//         method: 'post',
//         // url: 'http://localhost:8001/api/v1/questions/add',
//         data: {
//           titleNewEvent: store.getState().events.titleNewEvent,
//           descriptionNewEvent: store.getState().events.descriptionNewEvent,
//           tagNewEvent: store.getState().events.tagNewEvent,
//           department: store.getState().events.department,
//           particapant: store.getState().events.nb_participant_max,
//           date: store.getState().events.date,

//         },
//         headers: {
//           'Content-Type': 'application/json; charset=utf-8',
//           Authorization: `Bearer ${store.getState().user.token}`,
//         },
//       })
//       // const config = {
//       //   headers: { Authorization: `Bearer ${store.getState().user.token}` },
//       // };
//       // const bodyParameters = {
//       //   title: store.getState().questions.titleNewQuestion,
//       //   description: store.getState().questions.descriptionNewQuestion,
//       //   tag: store.getState().questions.tagNewQuestion,
//       // };
//       // axios.post(
//       //   'http://localhost:8001/api/v1/questions/add',
//       //   bodyParameters,
//       //   config,
//       // )
//         .then((response) => {
//           console.log(response);
//         })
//         .catch((error) => {
//           if (error.response) {
//             // la requête a été faite et le code de réponse du serveur n’est pas dans
//             // la plage 2xx
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//           }
//           else if (error.request) {
//             // la requête a été faite mais aucune réponse n’a été reçue
//             // `error.request` est une instance de XMLHttpRequest dans le navigateur
//             // et une instance de http.ClientRequest avec node.js
//             console.log(error.request);
//           }
//           else {
//             // quelque chose s’est passé lors de la construction de la requête et cela
//             // a provoqué une erreur
//             console.log('Error', error.message);
//           }
//           console.log(error.config);
//         });
//       break;
//     default:
//   }
//   // on passe l'action au suivant (middleware suivant ou reducer)
//   next(action);
// };
// export default newEventMiddleware;
