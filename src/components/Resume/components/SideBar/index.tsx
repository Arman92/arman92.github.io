import React from 'react';
import { Text, Image } from '@react-pdf/renderer';
// import homeIcon from './home2.png';

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
          <SectionLabel>Skills</SectionLabel>
        </SectionTitle>

        <SkillContainer>
          <SkillLabel>JavaScript/TypeScript</SkillLabel>
          <BarContainer>
            <Bar style={{ width: '100%' }} />
          </BarContainer>
          <ExcellencyLabel>Excellent</ExcellencyLabel>
        </SkillContainer>

        <SkillContainer>
          <SkillLabel>Node.js</SkillLabel>
          <BarContainer>
            <Bar style={{ width: '90%' }} />
          </BarContainer>
          <ExcellencyLabel>Very Good</ExcellencyLabel>
        </SkillContainer>

        <SkillContainer>
          <SkillLabel>Golang/Java</SkillLabel>
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

        <SkillContainer>
          <SkillLabel>React Native</SkillLabel>
          <BarContainer>
            <Bar style={{ width: '80%' }} />
          </BarContainer>
          <ExcellencyLabel>Good</ExcellencyLabel>
        </SkillContainer>

        <SkillContainer>
          <SkillLabel>Linux</SkillLabel>
          <BarContainer>
            <Bar style={{ width: '90%' }} />
          </BarContainer>
          <ExcellencyLabel>Very Good</ExcellencyLabel>
        </SkillContainer>

        <SkillContainer>
          <SkillLabel>Git</SkillLabel>
          <BarContainer>
            <Bar style={{ width: '90%' }} />
          </BarContainer>
          <ExcellencyLabel>Very Good</ExcellencyLabel>
        </SkillContainer>

        <SkillContainer>
          <SkillLabel>CI/CD/Docker/Kubernetes</SkillLabel>
          <BarContainer>
            <Bar style={{ width: '70%' }} />
          </BarContainer>
          <ExcellencyLabel>Experienced</ExcellencyLabel>
        </SkillContainer>
      </Section>

      <Section>
        <SectionTitle>
          <SectionLabel>Contact</SectionLabel>
        </SectionTitle>

        <TextBold>Address</TextBold>
        {/* <Image src={{ data: homeIcon as any, format: 'png' }} style={{ width: '24px', height: '24px' }} /> */}
        <Text>TehranPars, Tehran, Iran</Text>

        <TextBold style={{ marginTop: '6px' }}>Phone</TextBold>
        <Text>+98 936 4650095</Text>

        <TextBold style={{ marginTop: '6px' }}>Email</TextBold>
        <Text>Arman1371@gmail.com</Text>
      </Section>
    </LeftSideBar>
  );
};
