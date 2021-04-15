/**
 * NOTE: При изменениях в этом файле необходимо также учитывать gatsby-ssr.
 */

import { sendMetrikaHit } from './src/libs/analytics';

export { wrapRootElement } from './gatsby/wrapRootElement';

export const onRouteUpdate = ({ location }) => {
    sendMetrikaHit(location.href);
};
