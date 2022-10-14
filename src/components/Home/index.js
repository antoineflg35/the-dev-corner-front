import Content from './Content';

import CardsQuestions from './CardsQuestions';
import CardsEvents from './CardsEvents';

function Home() {
  return (
    <div className="home">
      <Content />
      <CardsQuestions />
      <CardsEvents />
    </div>
  );
}
export default Home;
