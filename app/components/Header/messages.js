/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About Us',
  },
  legislation: {
    id: `${scope}.legislation`,
    defaultMessage: 'Legislation',
  },
  decisions: {
    id: `${scope}.decisions`,
    defaultMessage: 'Decisions',
  },
  public: {
    id: `${scope}.public`,
    defaultMessage: 'Public Info',
  },
  media: {
    id: `${scope}.media`,
    defaultMessage: 'Media',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
  // features: {
  //   id: `${scope}.features`,
  //   defaultMessage: 'Features',
  // },
});
