/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';
import { routes } from '../../utils/routes';

export const scope = 'boilerplate.components.Header';

const routeArray = routes.map(route => ({
  [route.localeKey]: {
    id: `${scope}.${route.localeKey}`,
    defaultMessage: route.title,
  },
}));

// eslint-disable-next-line prefer-const
let innerRouteArray = [];

routes.forEach(route => {
  const j = route.list.map(item => ({
    [item.localeKey]: {
      id: `${scope}.${item.localeKey}`,
      defaultMessage: item.title,
    },
  }));

  innerRouteArray.push(...j);
  return route;
});

const messages = Object.assign(...routeArray, ...innerRouteArray);
console.log(messages);
export default defineMessages(messages);
