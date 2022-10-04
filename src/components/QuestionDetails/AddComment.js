import {
  Button, Comment, Form, Header,
} from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { updateFieldAddResponses, addResponse } from '../../actions/response';

import avatar from '../../assets/images/avatar.jpeg'




function AddComment({ responses }) {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.response.description);


  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Réponses
      </Header>
      {
        responses.map((response) => (
          <Comment>
            <Comment.Avatar src={avatar} />
            <Comment.Content>
              <Comment.Author as="a">{response.user.pseudo}</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>
                {response.description}
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        ))
      }

      <Form
        reply
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addResponse());
        }}
      >
        <Form.TextArea
          value={description}
          onChange={(event) => {
            const action = updateFieldAddResponses(event.target.value, 'description');
            dispatch(action);
          }}
        />
        <Button content="Répondre à la question" labelPosition="left" icon="edit" primary />
      </Form>
    </Comment.Group>
  );
}

export default AddComment;
