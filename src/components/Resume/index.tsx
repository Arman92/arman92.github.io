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
  JobAchievements,
  Achievement,
  Bubble,
  AboutMeText,
  EducationTitle,
  EducationPlace,
  EducationYear,
  Dissertation
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
            and continues learning. Excellent reputation for resolving problems, flexibility and diligently. Motivated
            to learn, grow and excel in various technologies.
          </AboutMeText>
        </Section>

        <Section>
          <SectionTitleContainer>
            <SectionTitle>Work History</SectionTitle>
          </SectionTitleContainer>

          <WorkHeader>
            <JobTitle>Senior Front End Developer</JobTitle>
            <FlexRowView>
              <JobLocation>Pinwork (Tehran, Iran, Part Time)</JobLocation>
              <JobDuration>Oct. 2019 - Present</JobDuration>
            </FlexRowView>

            <JobAchievements>
              <Achievement>
                <Bubble />
                <Text>
                  Develop, deploy and maintain <Link src="https://pinwork.ir">Pinwork.ir</Link>
                </Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>
                  Increased customer satisfaction and total orders by at least 14% by improving the UX and SEO.
                </Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>React, Function Components, Hooks, Styled Components, AppContext, Typescript</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Jest and Enzyme unit testing, Cypress E2E tests</Text>
              </Achievement>
            </JobAchievements>
          </WorkHeader>

          <WorkHeader>
            <JobTitle>Full Stack Developer</JobTitle>
            <FlexRowView>
              <JobLocation>PragmIdea (UK, Remote)</JobLocation>
              <JobDuration>Apr. 2019 - Oct 2019</JobDuration>
            </FlexRowView>

            <JobAchievements>
              <Achievement>
                <Bubble />
                <Text>Developed an organizational meeting scheduling application.</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Backend: Node.js, Express, GraphQL, MongoDB</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Frontend: React, Function Components, Hooks, Styled Components, AppContext, Typescript</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Jest and Enzyme unit testing, Cypress E2E tests</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Gitlab CI/CD, Docker</Text>
              </Achievement>
            </JobAchievements>
          </WorkHeader>

          <WorkHeader>
            <JobTitle>Full Stack Developer</JobTitle>
            <FlexRowView>
              <JobLocation>Yekta Rah Avard Jinoos (Isfahan, Iran)</JobLocation>
              <JobDuration>May 2017 - Jun 2018</JobDuration>
            </FlexRowView>

            <JobAchievements>
              <Achievement>
                <Bubble />
                <Text>Design, develop and maintaining of an emergency fire events monitoring system.</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Worked closely with HSE experts and firemen to figure out subtle details of the system.</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>
                  The System is actively in use in local fire-stations and connected to hundreds of buildings all over
                  Isfahan city.
                </Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Backend: Golang, Gorm ORM, PostgreSQL, PostGIS, Microservices</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Frontend: Angular 6, Material Design, Leaflet maps, WebSockets</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Docker, offline map tile server and containerized structure</Text>
              </Achievement>
            </JobAchievements>
          </WorkHeader>

          <WorkHeader>
            <JobTitle>Android and React Native Developer</JobTitle>
            <FlexRowView>
              <JobLocation>Dolphin Apadana (Isfahan, Iran)</JobLocation>
              <JobDuration>May. 2014 - Feb. 2017</JobDuration>
            </FlexRowView>
            <JobAchievements>
              <Achievement>
                <Bubble />
                <Text>
                  Designed and Developed various mobile application (e.g. asset dispatching, fleet management, hand-held
                  tracker, etc)
                </Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Trained 2 junior mobile developers</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>
                  Introduced modern methodologies for software development and team work such as agile development, Git
                  Flow, etc.
                </Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Designed and implmeneted a propriatery real-time, reliable connection protocol.</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Techs used: Java, Golang, Android SDK, React Native, SQLite, PostgreSQL, PostGIS, C, C++</Text>
              </Achievement>
            </JobAchievements>
          </WorkHeader>

          <WorkHeader>
            <JobTitle>.Net Developer</JobTitle>
            <FlexRowView>
              <JobLocation>Sub-sea R&D Center, Isfahan University of Technology (Isfahan, Iran)</JobLocation>
              <JobDuration>Dec. 2013 - May. 2014</JobDuration>
            </FlexRowView>

            <JobAchievements>
              <Achievement>
                <Bubble />
                <Text>Part of the full-stack ASP.Net development team.</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Developed a fully customizable charting and analyzing dashboard.</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Techs used: ASP.net MVC, Entity Framework, SQL Server, HighCharts</Text>
              </Achievement>
            </JobAchievements>
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

            <JobAchievements>
              <Achievement>
                <Bubble />
                <Text>Techs used: Golang, PostgreSQL, PostGIS, Docker</Text>
              </Achievement>
            </JobAchievements>
            <JobAchievements>
              <Achievement>
                <Bubble />
                <Text>First of the kind in Iran, inspired a dozen of similar chat bots.</Text>
              </Achievement>
            </JobAchievements>
          </WorkHeader>

          <WorkHeader>
            <JobTitle>Golang Telegram TdLib</JobTitle>
            <FlexRowView>
              <JobLocation>
                Golang bindings for Telegram Tdlib, enables you to create a new Telegram client with Go.
              </JobLocation>
            </FlexRowView>
          </WorkHeader>
        </Section>

        <Section>
          <SectionTitleContainer>
            <SectionTitle>Academic Background</SectionTitle>
          </SectionTitleContainer>
          <WorkHeader>
            <FlexRowView>
              <EducationTitle>Bachelor's degree in Software Engineering</EducationTitle>
              <EducationYear>2011 - 2016</EducationYear>
            </FlexRowView>

            <EducationPlace>Isfahan University of Technology (IUT) - Isfahan, Iran</EducationPlace>
            <JobAchievements>
              <Achievement>
                <Bubble />
                <Text>Dissertation: </Text>
                <Dissertation> Implementing a private cloud with OpenStack</Dissertation>
                <Dissertation style={{ fontSize: 8 }}>
                  (supervisor: <Link src="http://www.manshaei.org/">Dr. Mohammad H. Manshaei)</Link>
                </Dissertation>
              </Achievement>
            </JobAchievements>
          </WorkHeader>

          <WorkHeader>
            <JobTitle>Teaching Assistant, Lab Instructor</JobTitle>
            <FlexRowView>
              <EducationPlace>Isfahan University of Technology (IUT) - Isfahan, Iran</EducationPlace>
              <EducationYear>2015 - 2016</EducationYear>
            </FlexRowView>
            <JobAchievements>
              <Achievement>
                <Bubble />
                <Text>Computer Networks</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Database Lab</Text>
              </Achievement>
              <Achievement>
                <Bubble />
                <Text>Advanced Programming Lab</Text>
              </Achievement>
            </JobAchievements>
          </WorkHeader>
        </Section>
      </MainContent>
    </Body>
  </Document>
);

export default ResumeComponent;
