import React from 'react';
import { Document, Font, Text } from '@react-pdf/renderer';

import { SideBar } from './components/SideBar';
import { Body, MainContent, Section, SectionTitleContainer, SectionTitle } from './styled';

// Register font
Font.register({
  family: 'Century Gothic',
  src: 'https://builder.zety.com/blobcontent/zty/fonts/CenturyGothic.ttf',
  fonts: [
    { src: 'https://builder.zety.com/blobcontent/zty/fonts/CenturyGothic.ttf' },
    {
      src: 'https://builder.zety.com/blobcontent/zty/fonts/CenturyGothicBold.ttf',
      fontWeight: 'bold'
    },
    { src: 'https://builder.zety.com/blobcontent/zty/fonts/CenturyGothicItalic.ttf', fontStyle: 'italic' }
  ]
});

const ResumeComponent = () => (
  <Document>
    <Body size="A4">
      <SideBar />
      <MainContent>
        <Section>
          <SectionTitleContainer>
            <SectionTitle>Work History</SectionTitle>
          </SectionTitleContainer>
        </Section>
      </MainContent>
    </Body>
  </Document>
);

export default ResumeComponent;
