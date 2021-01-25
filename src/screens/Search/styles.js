import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.dark};
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 8px 16px 16px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.dark};
  border-width: 1px;
  border-radius: 8px;
  border-color: ${(props) => props.theme.dark_variant};
  font-family: Rubik-Regular;
  color: ${(props) => props.theme.light};
  margin-right: 8px;
  font-size: 16px;
  letter-spacing: 0.5px;
`;
