import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { spacing, pallette } from 'assets/variables';
import { transparentize } from 'polished';

const Container = styled('div')`
  padding: ${spacing.sm};
  background-color: transparent;
  display: block;
`;

const NavLink = styled('a')`
  margin: 0 ${spacing.xs};
  padding: ${spacing.xs};
  background-color: ${pallette.dark.base};
  color: ${pallette.dark.primary};
  border-bottom: 2px solid transparent;
  transition: all 0.15s ease-in-out;
  &:hover {
    background-color: ${transparentize(0.7, pallette.dark.primary)};
    color: ${pallette.white};
    border-color: ${pallette.dark.primary};
  }
`;

const Navbar = ({ navItems }) => (
  <Container>
    {navItems.map(navItem => (
      <NavLink href={navItem.link} key={navItem.name}>
        {navItem.name}
      </NavLink>
    ))}
  </Container>
);

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.stirng
    })
  ).isRequired
};

export default Navbar;
