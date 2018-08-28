/**
 *
 * Asynchronously loads the component for TestEditor
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
