import React from 'react';
import { Text } from '@react-pdf/renderer';

import {
  LeftSideBar,
  NameLabel,
  TitleLabel,
  Section,
  SectionTitle,
  SectionLabel,
  TextBold,
  SkillContainer,
  SkillLabel,
  ExcellencyLabel,
  BarContainer,
  Bar
} from './styled';

export const SideBar = () => {
  return (
    <LeftSideBar>
      <NameLabel>Arman</NameLabel>
      <NameLabel>Safikhani</NameLabel>
      <TitleLabel>Full-Stack Engineer</TitleLabel>

      <Section>
        <SectionTitle>
          <SectionLabel>About</SectionLabel>
        </SectionTitle>

        <Text style={{ paddingRight: '12px', textAlign: 'justify', lineHeight: '30px' }}>
          Enthusiastic Full-Stack engineer eager to contribute to team success through hard work, attention to detail
          and excellent organizational skills. Excellent reputation for resolving problems, flexibility and diligently.
          Motivated to learn, grow and excel in variant technologies.
        </Text>
      </Section>

      <Section>
        <SectionTitle>
          <SectionLabel>Contact</SectionLabel>
        </SectionTitle>

        <TextBold>Address</TextBold>
        <Text>TehranPars, Tehran, Iran</Text>

        <TextBold style={{ marginTop: '6px' }}>Phone</TextBold>
        <Text>+98 936 4650095</Text>

        <TextBold style={{ marginTop: '6px' }}>Email</TextBold>
        <Text>Arman1371@gmail.com</Text>
      </Section>

      <Section>
        <SectionTitle>
          <SectionLabel>Skills</SectionLabel>
        </SectionTitle>

        <SkillContainer>
          <SkillLabel>Node.js</SkillLabel>
          <BarContainer>
            <Bar style={{ width: '90%' }} />
          </BarContainer>
          <ExcellencyLabel>Very Good</ExcellencyLabel>
        </SkillContainer>

        <SkillContainer>
          <SkillLabel>React.js</SkillLabel>
          <BarContainer>
            <Bar style={{ width: '100%' }} />
          </BarContainer>
          <ExcellencyLabel>Excellent</ExcellencyLabel>
        </SkillContainer>
      </Section>
    </LeftSideBar>
  );
};