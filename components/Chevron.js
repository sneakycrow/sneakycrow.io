import styled from 'react-emotion';
import { lighten } from 'polished';
import { pallette } from './variables';

const Icon = styled('span')`
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

const Chevron = () => <Icon />;

export default Chevron;
