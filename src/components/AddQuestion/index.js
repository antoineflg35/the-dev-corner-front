import { Form, TextArea, Input, Button } from 'semantic-ui-react';

function AddQuestion() {
  return (
    <div className="add_questions">
      <h2>Ajouter une question</h2>
      <Form>
        <Form.Field>
          <TextArea placeholder="Titre de la question" />
          <TextArea placeholder="Contenu de la question" />
          <Input list="languages" placeholder="Choose language..." />
          <datalist id="languages">
            <option>PHP</option>
            <option>JS</option>
            <option>REACT</option>
            <option>Symphony</option>
          </datalist>
          <Button
            content="Poser une question"
            primary
          />
        </Form.Field>
      </Form>
    </div>
  );
}

export default AddQuestion;
