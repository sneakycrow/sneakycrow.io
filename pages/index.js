import { styled } from 'react-emotion';
import { pallette } from '../assets/variables';

const Container = styled('div')`
  height: 100vh;
  width: 100vw;
  background-color: ${pallette.white};
`;

const App = () => (
  <Container>
    <p>Hello World</p>
  </Container>
);

export default App;
