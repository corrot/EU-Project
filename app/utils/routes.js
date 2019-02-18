import HomePage from 'containers/HomePage/Loadable';
import AboutUsPage from 'containers/AboutUsPage/Loadable';
import WhatWeDoPage from 'containers/WhatWeDoPage/Loadable';
import ChairmanPage from 'containers/ChairmanPage/Loadable';
import StructurePage from 'containers/StructurePage/Loadable';
import CooperationPage from 'containers/CooperationPage/Loadable';
import CarreerPage from 'containers/CarreerPage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import LegislationPage from 'containers/LegislationPage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';

export const routes = [
  {
    title: 'Home',
    path: '/',
    localeKey: 'home',
    component: HomePage,
    list: [],
  },
  {
    title: 'About Us',
    path: '/about',
    localeKey: 'about',
    component: AboutUsPage,
    list: [
      {
        title: 'What we do',
        path: '/what-we-do',
        localeKey: 'whatWeDo',
        component: WhatWeDoPage,
      },
      {
        title: 'Chairman',
        path: '/chairman',
        localeKey: 'chairman',
        component: ChairmanPage,
      },
      {
        title: 'Structure',
        path: '/structure',
        localeKey: 'structure',
        component: StructurePage,
      },
      {
        title: 'Cooperation',
        path: '/cooperation',
        localeKey: 'cooperation',
        component: CooperationPage,
      },
      {
        title: 'Carreer',
        path: '/carreer',
        localeKey: 'career',
        component: CarreerPage,
      },
      {
        title: 'Projects',
        path: '/projects',
        localeKey: 'projects',
        component: ProjectsPage,
      },
    ],
  },
  {
    title: 'Legislation',
    path: '/legislation',
    localeKey: 'legislation',
    component: LegislationPage,
    list: [
      {
        title: 'National',
        path: '/national',
        localeKey: 'national',
        component: FeaturePage,
      },
      {
        title: 'Guidelines',
        path: '/guidelines',
        localeKey: 'guidelines',
        component: FeaturePage,
      },
      {
        title: 'International',
        path: '/international',
        localeKey: 'international',
        component: FeaturePage,
      },
    ],
  },
  {
    title: 'Decisions',
    path: '/decisions',
    localeKey: 'decisions',
    component: FeaturePage,
    list: [
      {
        title: 'Unfair competition',
        path: '/unfair-competition',
        localeKey: 'unfairCompetition',
        component: FeaturePage,
      },
      {
        title: 'Advertising',
        path: '/advertising',
        localeKey: 'advertising',
        component: FeaturePage,
      },
      {
        title: 'State aid',
        path: '/state-aid',
        localeKey: 'stateAid',
        component: FeaturePage,
      },
      {
        title: 'Abuse of dominant position',
        path: '/abuse-of-diminant-position',
        localeKey: 'abuseOfDominantPosition',
        component: FeaturePage,
      },
    ],
  },
  {
    title: 'Public',
    path: '/public',
    localeKey: 'public',
    component: FeaturePage,
    list: [
      {
        title: 'Proactive information',
        path: '/proactive-information',
        localeKey: 'proactiveInformation',
        component: FeaturePage,
      },
      {
        title: 'Annual reports',
        path: '/annual-reports',
        localeKey: 'annualReports',
        component: FeaturePage,
      },
      {
        title: 'Statistics',
        path: '/statistics',
        localeKey: 'statistics',
        component: FeaturePage,
      },
      {
        title: 'Public survey',
        path: '/public-survey',
        localeKey: 'publicSurvey',
        component: FeaturePage,
      },
      {
        title: 'Request related acts',
        path: '/request-related-acts',
        localeKey: 'requestRelatedActs',
        component: FeaturePage,
      },
      {
        title: 'Request standard',
        path: '/request-standard',
        localeKey: 'requestStandard',
        component: FeaturePage,
      },
      {
        title: 'Application form',
        path: '/application-form',
        localeKey: 'applicationForm',
        component: FeaturePage,
      },
      {
        title: 'Complaint form',
        path: '/complaint-form',
        localeKey: 'complaintForm',
        component: FeaturePage,
      },
    ],
  },
  {
    title: 'Media',
    path: '/media',
    localeKey: 'media',
    component: FeaturePage,
    list: [
      {
        title: 'Press releases',
        path: '/press-releases',
        localeKey: 'pressReleases',
        component: FeaturePage,
      },
      {
        title: 'Events',
        path: '/events',
        localeKey: 'events',
        component: FeaturePage,
      },
      {
        title: 'News archive',
        path: '/news-archive',
        localeKey: 'newsArchive',
        component: FeaturePage,
      },
      {
        title: 'Newsletter',
        path: '/newsletter',
        localeKey: 'newsletter',
        component: FeaturePage,
      },
      {
        title: 'Publications',
        path: '/publications',
        localeKey: 'publications',
        component: FeaturePage,
      },
      {
        title: 'FAQ',
        path: '/faq',
        localeKey: 'faq',
        component: FeaturePage,
      },
    ],
  },
  {
    title: 'Contact',
    path: '/contact',
    localeKey: 'contact',
    component: FeaturePage,
    list: [],
  },
];
