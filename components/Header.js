import styled from 'react-emotion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AdaDadHat from '../static/ada_dad_hat.svg';
import { pallette, spacing } from './variables';

const NavigationBar = styled('div')`
  background-color: ${pallette.white};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: top;
  justify-content: space-between;
  padding-top: ${spacing.xs};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Navigation = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  padding: 0 ${spacing.md};
`;

const NavigationList = styled('ul')`
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  li {
    display: inline-block;
    *:first-child {
    }
    a {
      padding: ${spacing.sm};
      display: block;
    }
  }
`;

const LogoLink = styled('a')`
  opacity: 1;
  border-radius: 50%;
  padding: 0;
  svg {
    transition: border 0.2s ease-in-out;
  }
  &:hover {
    svg {
      border: 5px solid ${pallette.green};
    }
  }
  &:focus {
    svg {
      border: 5px solid ${pallette.pink};
    }
  }
`;

const Logo = styled(AdaDadHat)`
  border-radius: 50%;
  stroke-width: 0;
  min-width: 50px;
  min-height: 50px;
  width: 50px;
  height: 50px;
  padding: 0;
  border: 5px solid transparent;
`;

const Header = () => (
  <NavigationBar>
    <LogoLink href="https://www.sneakycrow.io/">
      <Logo />
    </LogoLink>
    <Navigation>
      <NavigationList>
        <li>
          <AnchorLink href="#home">Top</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about">About</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#portfolio">Portfolio</AnchorLink>
        </li>
      </NavigationList>
    </Navigation>
  </NavigationBar>
);

export default Header;
