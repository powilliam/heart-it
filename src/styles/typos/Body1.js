import styled from 'styled-components/native';
import {layout, color, space} from 'styled-system';

const Body1 = styled.Text`
  ${layout}
  ${color}
  ${space}
  font-family: Rubik-Regular;
  color: ${(props) => props.theme.light};
  font-size: 16px;
  letter-spacing: 0.5px;
`;

export default Body1;
