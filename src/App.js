import React from 'react';
import styled from 'react-emotion';
import Avatar from 'components/Avatar';
import Navbar from 'components/Navigation/Navbar';
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

const Title = styled('h1')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Subtitle = styled('small')`
  display: block;
  color: ${pallette.dark.secondary};
`;

const App = () => {
  const routes = [
    {
      name: 'Twitter',
      link: 'https://twitter.com/sneakycr0w'
    },
    {
      name: 'Github',
      link: 'https://github.com/sneakycrow'
    },
    {
      name: 'Email',
      link: 'mailto:zach@sneakycrow.io'
    }
  ];
  return (
    <Container>
      <Avatar imageSrc="https://crows-nest.nyc3.digitaloceanspaces.com/assets/images/ada.png" />
      <Title>
        Zachary E Sohovich
        <Subtitle>Software Engineer</Subtitle>
      </Title>
      <Navbar navItems={routes} />
      <p>
        This website is currently under construction. See my progress at{' '}
        <a href="https://github.com/sneakycrow/sneakycr0w.io">my github repo</a>.
        I plan on having the website utilize React, Emotion, and an unchosen
        global state management.
      </p>
    </Container>
  );
};

export default App;
