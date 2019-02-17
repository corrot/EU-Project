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
    component: HomePage,
    list: [],
  },
  {
    title: 'About Us',
    path: '/about',
    component: AboutUsPage,
    list: [
      {
        title: 'What we do',
        path: '/what-we-do',
        component: WhatWeDoPage,
      },
      {
        title: 'Chairman',
        path: '/chairman',
        component: ChairmanPage,
      },
      {
        title: 'Structure',
        path: '/structure',
        component: StructurePage,
      },
      {
        title: 'Cooperation',
        path: '/cooperation',
        component: CooperationPage,
      },
      {
        title: 'Carreer',
        path: '/carreer',
        component: CarreerPage,
      },
      {
        title: 'Projects',
        path: '/projects',
        component: ProjectsPage,
      },
    ],
  },
  {
    title: 'Legislation',
    path: '/legislation',
    component: LegislationPage,
    list: [
      {
        title: 'Nationl',
        path: '/nationl',
        component: FeaturePage,
      },
      {
        title: 'Guidelines',
        path: '/guidelines',
        component: FeaturePage,
      },
      {
        title: 'International',
        path: '/international',
        component: FeaturePage,
      },
    ],
  },
  {
    title: 'Decisions',
    path: '/decisions',
    component: FeaturePage,
    list: [
      {
        title: 'Unfair competition',
        path: '/unfair-competition',
        component: FeaturePage,
      },
      {
        title: 'Advertising',
        path: '/advertising',
        component: FeaturePage,
      },
      {
        title: 'State aid',
        path: '/state-aid',
        component: FeaturePage,
      },
      {
        title: 'Abuse of dominant position',
        path: '/abuse-of-diminant-position',
        component: FeaturePage,
      },
    ],
  },
  {
    title: 'Public',
    path: '/public',
    component: FeaturePage,
    list: [
      {
        title: 'Proactive information',
        path: '/proactive-information',
        component: FeaturePage,
      },
      {
        title: 'Annual reports',
        path: '/annual-reports',
        component: FeaturePage,
      },
      {
        title: 'Statistics',
        path: '/statistics',
        component: FeaturePage,
      },
      {
        title: 'Public survey',
        path: '/public-survey',
        component: FeaturePage,
      },
      {
        title: 'Request related acts',
        path: '/request-related-acts',
        component: FeaturePage,
      },
      {
        title: 'Request standard',
        path: '/request-standard',
        component: FeaturePage,
      },
      {
        title: 'Application form',
        path: '/application-form',
        component: FeaturePage,
      },
      {
        title: 'Complaint form',
        path: '/complaint-form',
        component: FeaturePage,
      },
    ],
  },
  {
    title: 'Media',
    path: '/media',
    component: FeaturePage,
    list: [
      {
        title: 'Press releases',
        path: '/press-releases',
        component: FeaturePage,
      },
      {
        title: 'Events',
        path: '/events',
        component: FeaturePage,
      },
      {
        title: 'News archive',
        path: '/news-archive',
        component: FeaturePage,
      },
      {
        title: 'Newsletter',
        path: '/newsletter',
        component: FeaturePage,
      },
      {
        title: 'Publications',
        path: '/publications',
        component: FeaturePage,
      },
      {
        title: 'FAQ',
        path: '/faq',
        component: FeaturePage,
      },
    ],
  },
  {
    title: 'Contact',
    path: '/contact',
    component: FeaturePage,
    list: [],
  },
];
