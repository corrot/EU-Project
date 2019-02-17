/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.FeaturePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Features',
  },
  secondaryHeader: {
    id: `${scope}.secondaryHeader`,
    defaultMessage:
      'I do not exist yet. In order to create me run `npm run generate container`, then add my title in component filed of route in utils/routes.js',
  },
});
