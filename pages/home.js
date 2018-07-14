import { Fragment } from 'react';
import styled, { keyframes } from 'react-emotion';
import { lighten } from 'polished';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Header from '../components/Header';
import { pallette } from '../assets/variables';

const ContentContainer = styled('div')`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Chevron = styled('span')`
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  content: '';
  color: ${lighten(0.3, pallette.gray)};
  display: inline-block;
  height: 0.45em;
  transform: rotate(135deg);
  vertical-align: top;
  width: 0.45em;
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
  span {
    animation: ${pulse} 1s infinite;
  }
`;

const Home = () => (
  <Fragment>
    <Header />
    <ContentContainer id="home">
      <p>Hello World</p>
      <small>Website in maintenance mode, come back soon!</small>
      <a href="mailto:zach@sneakycrow.io">Email Me</a>
      <ScrollDownContainer href="#about">
        Scroll Down
        <Chevron />
      </ScrollDownContainer>
    </ContentContainer>
    <ContentContainer id="about">
      This will be an about section!
    </ContentContainer>
    <ContentContainer id="portfolio">
      This will be a portfolio section!
    </ContentContainer>
  </Fragment>
);

export default Home;
