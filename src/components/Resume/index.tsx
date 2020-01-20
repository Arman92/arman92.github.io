import React from 'react';
import { Document, Font, Text, Link } from '@react-pdf/renderer';

import { SideBar } from './components/SideBar';
import {
  Body,
  MainContent,
  Section,
  SectionTitleContainer,
  SectionTitle,
  WorkHeader,
  JobTitle,
  FlexRowView,
  JobLocation,
  JobDuration,
  JobAcheivments,
  Acheivment,
  Bubble,
  AboutMeText,
  EducationTitle,
  EducationPlace,
  EducationYear
} from './styled';

// Register font
Font.register({
  family: 'Century Gothic',
  fonts: [
    { src: 'https://builder.zety.com/blobcontent/zty/fonts/CenturyGothic.ttf' },
    {
      src: 'https://builder.zety.com/blobcontent/zty/fonts/CenturyGothicBold.ttf',
      fontWeight: 700
    },
    { src: 'https://builder.zety.com/blobcontent/zty/fonts/CenturyGothicItalic.ttf', fontStyle: 'italic' }
  ]
});

// Register font
Font.register({
  family: 'Segoe UI',

  fonts: [
    { src: 'http://c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf', fontWeight: 300 },
    {
      src: 'http://c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf',
      fontWeight: 'normal'
    },
    { src: 'http://c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf', fontWeight: 700 }
  ]
});

const ResumeComponent = () => (
  <Document>
    <Body size="A4">
      <SideBar />
      <MainContent>
        <Section>
          <SectionTitleContainer>
            <SectionTitle>About Me</SectionTitle>
          </SectionTitleContainer>
          <AboutMeText style={{ padding: '12px', paddingTop: 0, textAlign: 'justify', lineHeight: '30px' }}>
            Enthusiastic Full-Stack engineer eager to contribute to team success through hard work, attention to detail
            and excellent organizational skills. Excellent reputation for resolving problems, flexibility and
            diligently. Motivated to learn, grow and excel in variant technologies.
          </AboutMeText>
        </Section>

        <Section>
          <SectionTitleContainer>
            <SectionTitle>Work History</SectionTitle>
          </SectionTitleContainer>

          <WorkHeader>
            <JobTitle>React Front-End developer</JobTitle>
            <FlexRowView>
              <JobLocation>Pinwork</JobLocation>
              <JobDuration>Oct. 2019 - Present</JobDuration>
            </FlexRowView>

            <JobAcheivments>
              <Acheivment>
                <Bubble></Bubble>
                <Text>
                  Develop, deploy and maintain main website of <Link src="https://pinwork.ir">Pinwork.ir</Link>
                </Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>React, Function Components, Hooks, Styled Components, AppContext, Typescript</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Jest and Enzyme unit testing, Cypress E2E tests</Text>
              </Acheivment>
            </JobAcheivments>
          </WorkHeader>

          <WorkHeader>
            <JobTitle>Full-Stack JavaScript developer</JobTitle>
            <FlexRowView>
              <JobLocation>PragmIdea</JobLocation>
              <JobDuration>Apr. 2019 - Oct 2019</JobDuration>
            </FlexRowView>

            <JobAcheivments>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Developing an organizational meeting scheduling application.</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Backend: Node.js, Express, GraphQL, MongoDB</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Frontend: React, Function Components, Hooks, Styled Components, AppContext, Typescript</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Jest and Enzyme unit testing, Cypress E2E tests</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Gitlab CI/CD, Docker</Text>
              </Acheivment>
            </JobAcheivments>
          </WorkHeader>

          <WorkHeader>
            <JobTitle>Full-Stack developer</JobTitle>
            <FlexRowView>
              <JobLocation>Yekta Rah Avard Jinoos (Miraj)</JobLocation>
              <JobDuration>May 2017 - Jun 2018</JobDuration>
            </FlexRowView>

            <JobAcheivments>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Design, develop and maintaining of an emergency fire events monitoring system.</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Backend: Golang, Gorm ORM, PostgreSQL, PostGIS, Microservices</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Frontend: Angular 6, Material Design, Leaflet maps, WebSockets</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Docker, offline map tile server and containerized structure</Text>
              </Acheivment>
            </JobAcheivments>
          </WorkHeader>

          <WorkHeader>
            <JobTitle>Senior Android and React-Native Developer</JobTitle>
            <FlexRowView>
              <JobLocation>Dolphin Apadana</JobLocation>
              <JobDuration>May. 2014 - Feb. 2017</JobDuration>
            </FlexRowView>
            <JobAcheivments>
              <Acheivment>
                <Bubble></Bubble>
                <Text>
                  Designed and Developed various mobile application (e.g. asset dispatching, fleet management, hand-held
                  tracker, etc)
                </Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Trained 2 junior mobile developers</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Designed and implmeneted a propriatery real-time, reliable connection protocol.</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>
                  Techs used: Java, Golang, Android SDK, React Native, SQLite, ORMs, PostgreSQL, PostGIS, C, C++
                </Text>
              </Acheivment>
            </JobAcheivments>
          </WorkHeader>

          <WorkHeader>
            <JobTitle>.Net Developer</JobTitle>
            <FlexRowView>
              <JobLocation>Sub-sea R&D Center, Isfahan University of Technology</JobLocation>
              <JobDuration>Dec. 2013 - May. 2014</JobDuration>
            </FlexRowView>

            <JobAcheivments>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Part of the full-stack ASP.Net development team.</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Developed a fully customizable charting and analyzing dashboard.</Text>
              </Acheivment>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Techs used: ASP.net MVC, Entity Framework, SQL Server, HighCharts</Text>
              </Acheivment>
            </JobAcheivments>
          </WorkHeader>
        </Section>

        <Section>
          <SectionTitleContainer>
            <SectionTitle>Products and Projects</SectionTitle>
          </SectionTitleContainer>

          <WorkHeader>
            <JobTitle>Hamsohbat Telegram Bot</JobTitle>
            <FlexRowView>
              <JobLocation>Telegram Dating Chatbot with over 300,000 total users and over 10,000 MAU.</JobLocation>
            </FlexRowView>

            <JobAcheivments>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Techs used: Golang, PostgreSQL, PostGIS, Docker</Text>
              </Acheivment>
            </JobAcheivments>
            <JobAcheivments>
              <Acheivment>
                <Bubble></Bubble>
                <Text>First of the kind in Iran, inspired a dozen of similar chat bots.</Text>
              </Acheivment>
            </JobAcheivments>
          </WorkHeader>

          <WorkHeader>
            <JobTitle>Golang Telegram TdLib</JobTitle>
            <FlexRowView>
              <JobLocation>
                Golang bindings for Telegram Tdlib, enables you to create a new Telegram client with Go.
              </JobLocation>
            </FlexRowView>

            <JobAcheivments>
              <Acheivment>
                <Bubble></Bubble>
                <Text>Techs used: Golang, PostgreSQL, PostGIS, Docker</Text>
              </Acheivment>
            </JobAcheivments>
            <JobAcheivments>
              <Acheivment>
                <Bubble></Bubble>
                <Text>First of the kind in Iran, inspired a dozen of similar chat bots.</Text>
              </Acheivment>
            </JobAcheivments>
          </WorkHeader>
        </Section>

        <Section>
          <SectionTitleContainer>
            <SectionTitle>Academic Background</SectionTitle>
          </SectionTitleContainer>
          <WorkHeader>
            <FlexRowView>
              <EducationTitle>Bachelor's degree on Software Engineering</EducationTitle>
              <EducationYear>2011 - 2016</EducationYear>
            </FlexRowView>

            <EducationPlace>Isfahan University of Technology (IUT) - Isfahan, Iran</EducationPlace>
          </WorkHeader>
        </Section>
      </MainContent>
    </Body>
  </Document>
);

export default ResumeComponent;
