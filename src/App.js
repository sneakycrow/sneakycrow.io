import React from 'react';
import styled from 'react-emotion';
import Avatar from 'components/Avatar';
import Navbar from 'components/Navigation/Navbar';
import { pallette, spacing } from 'assets/variables';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled('h1')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
`;

const Subtitle = styled('small')`
  display: block;
  color: ${pallette.dark.secondary};
  font-size: 0.5em;
`;

const List = styled('ul')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
  > li {
    margin-left: ${spacing.sm};
  }
`;

const QuickBio = styled('p')`
  max-width: 50vw;
  @media (max-width: 600px) {
    max-width: 75vw;
  }
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
      <List>
        <li>JS</li>
        <li>Rust</li>
        <li>Python</li>
      </List>
      <QuickBio>
        This website is currently under construction. See my progress at{' '}
        <a href="https://github.com/sneakycrow/sneakycr0w.io">my github repo</a>.
        I plan on having the website utilize React, Emotion, and an unchosen
        global state management.
      </QuickBio>
      <Navbar navItems={routes} />
    </Container>
  );
};

export default App;
