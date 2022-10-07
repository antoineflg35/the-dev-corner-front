import {
  Header as HeaderSui, Container, Form, Checkbox,
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  changeFieldNewLogin, createCount, toggleCheckboxNewLogin, displayListDepartment, fetchListTag,
} from '../../actions/newUser';

import './styles.scss';

function User() {
  const dispatch = useDispatch();

  const emailUser = useSelector((state) => state.newUser.email);
  const passwordUser = useSelector((state) => state.newUser.password);
  const nameUser = useSelector((state) => state.newUser.firstname);
  const surnameUser = useSelector((state) => state.newUser.lastname);
  const pseudoUser = useSelector((state) => state.newUser.pseudo);
  const department = useSelector((state) => state.newUser.department);
  const descriptionUser = useSelector((state) => state.newUser.description);
  const checked = useSelector((state) => state.newUser.checked);
  const departmentList = useSelector((state) => state.newUser.department_list);
  const tag = useSelector((state) => state.newUser.tag);
  

  // const [checkedJs, setCheckedJs] = useState(false);
  // const [checkedPhp, setCheckedPhp] = useState(false);

  useEffect(() => {
    dispatch(displayListDepartment());
    dispatch(fetchListTag());
  }, []);

  return (
    <div className='page-new-user'>
      <Link to="/">
        <HeaderSui textAlign="center" as="h1">The Dev Corner</HeaderSui>
      </Link>

      <Container stackable>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(createCount());
          }}
        >
          <Form.Group widths="equal">
            <Form.Input
              value={nameUser}
              fluid
              label="Nom"
              placeholder="Nom..."
              onChange={(event) => {
                const action = changeFieldNewLogin(event.target.value, 'firstname');
                dispatch(action);
              }}
            />
            <Form.Input
              value={surnameUser}
              fluid
              label="Prenom"
              placeholder="Prenom..."
              onChange={(event) => {
                const action = changeFieldNewLogin(event.target.value, 'lastname');
                dispatch(action);
              }}
            />
            <Form.Input
              value={pseudoUser}
              fluid
              label="Pseudo"
              placeholder="Pseudo"
              onChange={(event) => {
                const action = changeFieldNewLogin(event.target.value, 'pseudo');
                dispatch(action);
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              value={emailUser}
              fluid
              label="Email"
              placeholder="Email.."
              onChange={(event) => {
                const action = changeFieldNewLogin(event.target.value, 'email');
                dispatch(action);
              }}
            />
            <Form.Input
              value={passwordUser}
              type="password"
              fluid
              label="Password"
              placeholder="Password...."
              onChange={(event) => {
                const action = changeFieldNewLogin(event.target.value, 'password');
                dispatch(action);
              }}
            />

          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              value={department}
              label="Département"
              control="select"
              onChange={(event) => {
                const action = changeFieldNewLogin(event.target.value, 'department');
                dispatch(action);
              }}
            >
              {
                departmentList.map((d) => <option value={d.code}>{d.code}-{d.nom}</option>)
                }
            </Form.Field>

          </Form.Group>
          <Form.Group stackable widths="equal">
            <h3>Choisissez vos technologies préférées</h3>
            {
              tag.map((tag) => (
                <Checkbox  className='checkbox'
                  label={tag.techno}
              // value={js}
                  onChange={(e, data) => {
                    // setCheckedJs(data.checked);
                    console.log(e, data);
                    dispatch(toggleCheckboxNewLogin(data.checked, data.label));
                    // console.log(data.checked);
                    // if (data.checked === true) {
                    //   console.log('ok');
                    //   dispatch(changeFieldNewLogin(data.label, 'tag'));
                    // }
                    // else {
                    //   dispatch(deleteChoiceCheckbox(data.label));²
                    //   console.log('nop');
                    // }
                    // Si data.checked de PHP est faux
                    // alors dispatchr l'action pour supprimer du tableau
                    // Sinon dispatcher pour ajouter au tableau
                  }}
              // checked={checkedJs}
                  checked={checked}
                />
              ))
            }

            
          </Form.Group>

          <Form.TextArea
            value={descriptionUser}
            label="Description"
            placeholder="Votre description..."
            onChange={(event) => {
              const action = changeFieldNewLogin(event.target.value, 'description');
              dispatch(action);
            }}
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button primary>Créer mon compte</Form.Button>
        </Form>
      </Container>
    </div>

  );
}

export default User;
