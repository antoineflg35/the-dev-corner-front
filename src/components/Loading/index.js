import { Link } from 'react-router-dom';
import {
  Dimmer, Loader, Image, Segment,
} from 'semantic-ui-react';

function Loading() {
  return (

    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>

      <Image src="/images/wireframe/short-paragraph.png" />
    </Segment>

  );
}
export default Loading;
