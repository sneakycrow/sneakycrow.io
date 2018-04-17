import React from 'react';
import PropTypes from 'prop-types';

const Bio = ({ description }) => <p>{description}</p>;

Bio.propTypes = {
  description: PropTypes.string
};

Bio.defaultProps = {
  description: ''
};

export default Bio;
