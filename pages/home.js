import { Fragment } from 'react';
import styled, { keyframes } from 'react-emotion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Header from '../components/Header';
import Chevron from '../components/Chevron';
import { pallette, spacing } from '../assets/variables';

const ContentContainer = styled('div')`
  display: flex;
  height: 100vh;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${spacing.sm};
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
  max-width: 350px;
  margin: ${spacing.md} 0;
  line-height: ${spacing.md};
  text-align: justify;
  a {
    padding: 0;
  }
`;

const Home = () => (
  <Fragment>
    <Header />
    <ContentContainer id="home">
      <p>Hello World</p>
      <small>Under Active Maintenance</small>
      <Bio>
        My name is Zachary E Sohovich. I love to program (and rebuild my website
        often apparently). Right now, this site is being rebuilt with SSR React
        (NextJS). I am currently a software engineer at
        <a href="https://isolary.com"> isolary</a>. If you would like to get in
        touch with me, email me!
      </Bio>
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
