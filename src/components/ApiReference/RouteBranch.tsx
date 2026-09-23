import React from 'react';
import renderRoutes from '@docusaurus/renderRoutes';
import {matchPath, useLocation} from '@docusaurus/router';
import NotFound from '@theme/NotFound';

type Props = {route: {routes: Parameters<typeof renderRoutes>[0]}};

export default function RouteBranch({route}: Props): React.ReactNode {
  const {pathname} = useLocation();
  const routes = route.routes ?? [];
  return routes.some((child) => matchPath(pathname, child))
    ? renderRoutes(routes)
    : <NotFound />;
}
