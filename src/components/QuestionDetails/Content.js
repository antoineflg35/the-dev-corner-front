import { Header, Segment } from 'semantic-ui-react';

function Content({ questions }) {
  return (
    <div className="content_questions">
      
      <Header as="h2" attached="top">
        {questions[0].title}
      </Header>
      <Segment attached>
        { questions[0].description }
      </Segment>
    </div>
  );
}

export default Content;
