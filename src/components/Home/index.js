import Content from './Content';
import ButtonAskQuestion from './ButtonAskQuestion';
import ButtonAddEvent from './ButtonAddEvent';
import CardsQuestions from './CardsQuestions';
import CardsEvents from './CardsEvents';

function Home() {
  return (
    <div className="home">

      <Content />
      <CardsQuestions />
      <ButtonAskQuestion />
      <CardsEvents />
      <ButtonAddEvent />
    </div>
  );
}
export default Home;
