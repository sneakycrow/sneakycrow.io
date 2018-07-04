import React from 'react';
import styled from 'react-emotion';
import Avatar from 'components/Avatar';
import AdaDadHat from 'assets/svg/AdaDadHat';
import { pallette } from 'assets/variables';

const { dark } = pallette;

const Container = styled('div')`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: ${dark.base};
  flex-direction: column;
  color: ${dark.variant2};
`;

const App = () => (
  <Container>
    Software Engineer
    <Avatar imageSrc="https://crows-nest.nyc3.digitaloceanspaces.com/assets/images/ada.png" />
    <AdaDadHat />
  </Container>
);

export default App;
