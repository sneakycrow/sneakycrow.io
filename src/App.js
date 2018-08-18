import React, { Fragment } from 'react';
import styled, { keyframes, css } from 'react-emotion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Header from './components/Header';
import Chevron from './components/Chevron';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
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
  font-size: 1.5em;
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

const Bio = styled('p')`
  margin: ${spacing.md} 0;
  line-height: 1.5em;
  text-align: center;
  a {
    padding: 0;
    margin: 0 ${spacing.xs};
  }
`;

export const App = () => (
  <Fragment>
    <Header />
    <ContentContainer id="home">
      <p>Hello World</p>
      <small>Under Active Maintenance</small>
      <Bio>
        My name is Zachary E Sohovich. I love to program (and rebuild my website
        often apparently). Right now, this site is being rebuilt with SSR React
        (NextJS). If you would like to get in touch with me, email me! Currently
        a software engineer at
        <a
          href="https://isolary.com"
          className={css`
            &:hover {
              color: ${pallette.pink};
            }
          `}
        >
          isolary
        </a>
      </Bio>
      <a href="mailto:zach@sneakycrow.io">Email Me</a>
      <ScrollDownContainer href="#about">
        Scroll Down
        <Chevron />
      </ScrollDownContainer>
    </ContentContainer>
    <ContentContainer id="about">
      <Profile />
    </ContentContainer>
    <ContentContainer id="portfolio">
      <Portfolio />
    </ContentContainer>
  </Fragment>
);

export default App;
