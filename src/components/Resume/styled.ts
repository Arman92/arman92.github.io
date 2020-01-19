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
  padding: 3px 12px;
  margin-bottom: 8px;
`;

export const SectionTitle = styled.Text`
  color: #003d73;
  font-size: 16px;
`;

export const WorkHeader = styled.View`
  padding: 0 12px;
  margin-bottom: 8px;
`;

export const JobTitle = styled.Text`
  color: #343434;
  font-size: 12px;
`;

export const FlexRowView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const JobLocation = styled.Text`
  font-size: 9px;
  color: #909090;
`;

export const JobDuration = styled.Text`
  font-size: 9px;
  color: #909090;
`;

export const JobAcheivments = styled.View`
  margin-top: 1px;
`;

export const Acheivment = styled.View`
  font-size: 9px;
  flex-direction: row;
  align-items: center;
`;

export const Bubble = styled.View`
  width: 3px;
  height: 3px;
  border-radius: 3px;
  background-color: gray;
  margin-right: 5px;
`;
