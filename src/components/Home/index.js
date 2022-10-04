
import Content from './Content';
import ButtonAskQuestion from './ButtonAskQuestion';
import CardsQuestions from './CardsQuestions';
import CardsEvents from './CardsEvents';
import ListEnterprises from './ListEnterprises';


 
function Home() {
  return (
    <div className='homme'> 
       
      <Content />
      <ButtonAskQuestion />
      <CardsQuestions />
      <CardsEvents />
      <ListEnterprises />
      
    </div>
  );
}
export default Home;
