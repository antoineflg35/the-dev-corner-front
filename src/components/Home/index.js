import Content from './Content';
import ButtonAskQuestion from './ButtonAskQuestion';
import CardsQuestions from './CardsQuestions';
import CardsEvents from './CardsEvents';

function Home() {

  return (
    <div className="home">

      <Content />
      <ButtonAskQuestion />
      <CardsQuestions />
      <CardsEvents />

    </div>
  );
}
export default Home;
