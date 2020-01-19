import styled from '@react-pdf/styled-components';

export const Body = styled.Page`
  flex-direction: row;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
`;

export const MainContent = styled.View`
  flex: 1;
  height: 100%;
  background-color: #ffffff;
  color: #343434;
  padding: 16px 0;
`;

export const Section = styled.View``;

export const SectionTitleContainer = styled.View`
  border: 1px solid #d5d6d6;
  padding: 5px 12px;
`;

export const SectionTitle = styled.Text`
  color: #003d73;
  font-size: 16px;
`;
