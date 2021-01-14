import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.dark};
`;

export const FiltersContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 8px 8px 16px;
`;
