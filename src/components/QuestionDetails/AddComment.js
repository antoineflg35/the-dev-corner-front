import {
  Button, Comment, Form, Header,
} from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { updateFieldAddResponses, addResponse } from '../../actions/response';

function AddComment({ responses }) {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.response.description);
  console.log(responses)

  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Réponses
      </Header>
      {
        responses.map((response) => (
          <Comment>
            <Comment.Avatar src="/images/avatar/small/matt.jpg" />
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

      {/* <Comment>
        <Comment.Avatar src="/images/avatar/small/elliot.jpg" />
        <Comment.Content>
          <Comment.Author as="a">Elliot Fu</Comment.Author>
          <Comment.Metadata>
            <div>Yesterday at 12:30AM</div>
          </Comment.Metadata>
          <Comment.Text>
            <p>This has been very useful for my research. Thanks as well!</p>
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src="/images/avatar/small/jenny.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Jenny Hess</Comment.Author>
              <Comment.Metadata>
                <div>Just now</div>
              </Comment.Metadata>
              <Comment.Text>Elliot you are always so right :</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Comment>

      <Comment>
        <Comment.Avatar src="/images/avatar/small/joe.jpg" />
        <Comment.Content>
          <Comment.Author as="a">Joe Henderson</Comment.Author>
          <Comment.Metadata>
            <div>5 days ago</div>
          </Comment.Metadata>
          <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment> */}

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
