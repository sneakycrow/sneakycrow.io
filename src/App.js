import React, { Fragment } from 'react';
import styled, { keyframes } from 'react-emotion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Header from './components/Header';
import Chevron from './components/Chevron';
import Profile from './components/Profile';
import { pallette, spacing } from './components/variables';

const ContentContainer = styled('div')`
  display: flex;
  height: 100vh;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${spacing.sm};
  flex-wrap: wrap;
  > * {
    max-width: 75%;
  }
  @media (max-width: 768px) {
    max-width: auto;
    font-size: 1em;
    padding: 0;
  }
`;

const pulse = keyframes`
  0% {
    color: ${pallette.green};
    opacity: 1;
  }
  50% {
    color: ${pallette.gray};
    opacity: 0.75;
  }
  100% {
    color: ${pallette.green};
    opacity: 1;
  }
`;

const ScrollDownContainer = styled(AnchorLink)`
  position: absolute;
  bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${spacing.sm};
  span {
    animation: ${pulse} 1s infinite;
  }
`;

const App = () => (
  <Fragment>
    <Header />
    <ContentContainer id="home">
      <Profile />
      <a href="mailto:zach@sneakycrow.io">Email Me</a>
      <ScrollDownContainer href="#experience">
        Scroll Down
        <Chevron />
      </ScrollDownContainer>
    </ContentContainer>
    <ContentContainer id="experience">
      <p>
        I&#39;m going to update this more later, but here&#39;s the key stuff
        you probably want to know:
      </p>
      <ul>
        <li>Bachelors Degree in CS</li>
        <li>Strong Languages: JS, Rust, Python</li>
      </ul>
    </ContentContainer>
  </Fragment>
);

export default App;
