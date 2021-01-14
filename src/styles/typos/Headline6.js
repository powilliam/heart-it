import styled from 'styled-components/native';
import {layout, color, space} from 'styled-system';

const Headline6 = styled.Text`
  ${layout}
  ${color}
  ${space}
  font-family: Rubik-Medium;
  color: ${(props) => props.theme.light};
  font-size: 20px;
  letter-spacing: 0.15px;
`;

export default Headline6;
