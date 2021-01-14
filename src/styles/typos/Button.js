import styled from 'styled-components/native';
import {layout, color, space} from 'styled-system';

const Button = styled.Text`
  ${layout}
  ${color}
  ${space}
  font-family: Rubik-Medium;
  font-size: 14px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

export default Button;
