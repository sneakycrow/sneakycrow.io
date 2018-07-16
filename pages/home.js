import { Fragment } from 'react';
import styled, { keyframes, css } from 'react-emotion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Header from '../components/Header';
import Chevron from '../components/Chevron';
import { pallette, spacing } from '../components/variables';

const ContentContainer = styled('div')`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${spacing.sm};
  > * {
    max-width: 75%;
  }
  @media (max-width: 768px) {
    max-width: 100%;
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
  font-size: 2em;
  line-height: 1.5em;
  text-align: center;
  a {
    padding: 0;
    margin: 0 ${spacing.xs};
  }
`;

const Profile = styled('div')`
  display: flex;
`;

const ProfilePicture = styled('img')`
  width: auto;
  height: 150px;
  border: 5px solid ${pallette.pink};
  margin-right: ${spacing.xs};
`;

const ProfileText = styled('div')`
  display: flex;
  flex-direction: column;
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
    </ContentContainer>`
    <ContentContainer id="about">
      <Profile>
        <ProfilePicture
          src="static/zach.jpg"
          alt="Zachary Sohovich in a pink button 
            up shirt looking mysteriously at what seems like a corner of the room on the ceiling"
        />
        <ProfileText>
          <p>
            This is a picture of me. I&#39;m mysteriously looking into a corner.
            You don&#39;t know what I&#39;m looking at. Honestly, neither do I
          </p>
          <p>
            I&#39;m going to update this with actual information that you care
            about.
          </p>
        </ProfileText>
      </Profile>
    </ContentContainer>
    <ContentContainer id="portfolio">
      This will be a portfolio section!
    </ContentContainer>
  </Fragment>
);

export default Home;
