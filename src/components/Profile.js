import React from 'react';
import styled, { css } from 'react-emotion';
import { pallette, spacing } from './variables';
import me from '../assets/images/zach.jpg';

const Container = styled('div')`
  display: flex;
  align-items: center;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: 2px;
  min-width: 50%;
`;

const QuickLookContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const SocialIcons = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
`;

const PicContainer = styled('div')`
  position: relative;
  overflow: hidden;
  width: ${props => props.width};
  height: ${props => props.height || props.width};
  min-width: ${props => props.width};
  border-radius: 50%;
  padding: ${props => props.width / 8};
  border: 2px solid ${pallette.white};
  margin: 0 ${spacing.sm};
`;

const ProfilePic = styled('img')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
`;

const ProfileTextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  height: 100%;
  h1 {
    text-transform: uppercase;
  }
`;

const ProfileText = styled('p')`
  margin: ${spacing.md} 0;
  a {
    padding: 0;
    margin: 0 ${spacing.xs};
  }
`;

const Profile = () => (
  <Container>
    <QuickLookContainer>
      <PicContainer width="144px">
        <ProfilePic
          width="144px"
          src={me}
          alt="Zachary staring off into a corner. No one knows what he is looking at, including himself"
        />
      </PicContainer>
      <SocialIcons>
        <a href="https://github.com/sneakycrow">
          <i className="fab fa-github-alt" />
        </a>
        <a href="https://twitter.com/sneakycr0w">
          <i className="fab fa-twitter" />
        </a>
      </SocialIcons>
    </QuickLookContainer>
    <ProfileTextContainer>
      <h1>Sneaky Crow</h1>
      <ProfileText>
        My name is Zachary Sohovich. I&#39;m a Software Engineer who loves to
        experiment. I&#39;m currently working at
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
      </ProfileText>
    </ProfileTextContainer>
  </Container>
);

export default Profile;
