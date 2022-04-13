import React from 'react';
import { Box, Stack } from '@mui/material';
import AppPage from '../../components/AppPage';
import AboutSection from './components/AboutSection';
import RoadmapSection from './components/RoadmapSection';
import TeamSection from './components/TeamSection';
import HeaderSection from './components/HeaderSection';
import AnnouncementSection from './components/AnnouncementSection';

const HomePageSection: React.FC = ({ children }) => {
  return <Box py={4}>{children}</Box>;
};

const HomePage = () => {
  return (
    <AppPage>
      <Stack spacing={4} pt={4}>
        <HomePageSection>
          <HeaderSection />
        </HomePageSection>
        <HomePageSection>
          <AnnouncementSection />
        </HomePageSection>
        <HomePageSection>
          <AboutSection />
        </HomePageSection>
        <HomePageSection>
          <RoadmapSection />
        </HomePageSection>
        <HomePageSection>
          <TeamSection />
        </HomePageSection>
      </Stack>
    </AppPage>
  );
};

export default HomePage;
