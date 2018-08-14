import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { lighten } from 'polished';
import { pallette, spacing } from './variables';
import me from '../assets/images/zach.jpg';

const Container = styled('div')`
  width: 18rem;
  display: flex;
  align-items: center;
  background: linear-gradient(
    ${lighten(0.1, pallette.green)} 20%,
    ${pallette.green}
  );
  padding: ${spacing.sm} ${spacing.md};
  border-radius: 2px;
  min-width: 50%;
  color: ${pallette.white};
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

const ProfileText = styled('div')`
  color: ${pallette.white};
`;

const Profile = ({ overwatchRank }) => (
  <Container>
    <PicContainer width="144px">
      <ProfilePic
        width="144px"
        src={me}
        alt="Zachary staring off into a corner. No one knows what he is looking at, including himself"
      />
    </PicContainer>
    <ProfileText>
      Part Engineer, Part Nerd, Part Explorer, all extrordinair
      {overwatchRank}
    </ProfileText>
  </Container>
);

Profile.propTypes = {
  overwatchRank: PropTypes.string.isRequired
};

export default Profile;
