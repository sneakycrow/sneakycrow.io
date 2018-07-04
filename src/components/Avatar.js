import React from 'react';
import PropTypes from 'prop-types';
import styled, { css as emotion } from 'react-emotion';
import { pallette } from 'variables';

const ImageBase = emotion`
  width: 100px;
  height: 100px;
`;

const CircleAvatar = styled('img')`
  ${ImageBase};
  border-radius: 50%;
  border: 4px solid ${({ theme }) => pallette[theme].primary};
`;

const Avatar = ({ imageSrc, theme }) => (
  <CircleAvatar src={imageSrc} theme={theme} />
);

Avatar.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  theme: PropTypes.string
};

Avatar.defaultProps = {
  theme: 'dark'
};

export default Avatar;
