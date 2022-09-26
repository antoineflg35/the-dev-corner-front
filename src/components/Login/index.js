import { Container, Form, Header as HeaderSui, Button } from 'semantic-ui-react'



function Login () {
  return (
    <div>
      
      <HeaderSui  textAlign='center'  as='h1'>The Dev Corner</HeaderSui>
      <Container>

      <Form  >
    
    <Form.Field   >
      <label>Email</label>
      <input   placeholder='Votre Email.....' />
    </Form.Field>
    <Form.Field >
      <label>password</label>
      <input type='password' placeholder='mot de passe.....' />
    </Form.Field>
  

   
    <Button primary type='submit'>Se connecter</Button>
  </Form>

  </Container>


    </div>
  );
}
export default Login ;
