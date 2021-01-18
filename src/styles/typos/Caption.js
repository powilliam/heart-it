import styled from 'styled-components/native';
import {layout, color, space} from 'styled-system';

const Caption = styled.Text`
  ${layout}
  ${color}
  ${space}
  font-family: Rubik-Regular;
  color: ${(props) => props.theme.light_with_opacity};
  font-size: 12px;
  letter-spacing: 0.4px;
`;

export default Caption;
