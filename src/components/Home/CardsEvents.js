import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadingLastFiveEventsHome, fetchEventsLastFive } from '../../actions/events';
import ListEvents from './ListEvents';

function CardsEvents() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(loginToken());
    dispatch(fetchEventsLastFive());
  }, []);

  const data = useSelector((state) => state.events.list);
  return (
    <ListEvents data={data} />
  );
}

export default CardsEvents;
