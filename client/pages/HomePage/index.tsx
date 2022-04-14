import React from 'react';
import { Box, Stack } from '@mui/material';
import AppPage from '../../components/AppPage';
//import AboutSection from './components/AboutSection';
// import RoadmapSection from './components/RoadmapSection';
// import TeamSection from './components/TeamSection';
// import HeaderSection from './components/HeaderSection';
// import AnnouncementSection from './components/AnnouncementSection';
import CardSection from './latest-components/CardSection';
import AboutSection from './latest-components/AboutSection';
import HeaderSection from './latest-components/HeaderSection';
import HomeAppPage from '../../components/HomeAppPage';

const HomePageSection: React.FC = ({ children }) => {
  return <Box py={4}>{children}</Box>;
};

const HomePage = () => {
  return (
    <HomeAppPage>
      <Stack spacing={4} pt={4}>
        <HomePageSection>
          <HeaderSection />
        </HomePageSection>
        <HomePageSection>
          <AboutSection />
        </HomePageSection>
        <HomePageSection>
          <CardSection />
        </HomePageSection>
        {/* <HomePageSection>
          <HeaderSection />
        </HomePageSection>
        <HomePageSection>
          <AnnouncementSection />
        </HomePageSection> */}
        {/* <HomePageSection>
          <AboutSection />
        </HomePageSection> */}
        {/* <HomePageSection>
          <RoadmapSection />
        </HomePageSection>
        <HomePageSection>
          <TeamSection />
        </HomePageSection> */}
      </Stack>
    </HomeAppPage>
  );
};

export default HomePage;
