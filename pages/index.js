import styled, { hydrate, injectGlobal, keyframes } from 'react-emotion';
import { lighten } from 'polished';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Header from '../components/Header';
import { pallette, spacing } from '../assets/variables';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

injectGlobal`
  @font-face {
    font-family: 'Quicksand', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Quicksand');
  }
  @font-face {
    font-family: 'Open Sans', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Open+Sans');
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Quicksand', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: ${lighten(0.3, pallette.gray)};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
    opacity: 0.75;
    padding: ${spacing.sm};
    transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;
    &:hover {
      color: ${pallette.green};
      opacity: 1;
    }
  }
`;

const RootContainer = styled('div')`
  height: 100vh;
  width: 100vw;
  background-color: ${pallette.white};
`;

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
  <RootContainer>
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
  </RootContainer>
);

export default Home;
