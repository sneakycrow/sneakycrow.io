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
  &::after {
    display: block;
    position: relative;
    background-image: linear-gradient(${pallette.green}, ${pallette.white});
    margin-top: -150px;
    height: 150px;
    width: 100%;
    content: '';
  }
`;

const ProfilePic = styled('img')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
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
    <PicContainer width="144px">
      <ProfilePic
        width="144px"
        src={me}
        alt="Zachary staring off into a corner. No one knows what he is looking at, including himself"
      />
    </PicContainer>
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
  </Container>
);

export default Profile;
