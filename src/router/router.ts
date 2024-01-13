import {
  Router,
  Route,
  RootRoute,
  NotFoundRoute,
} from '@tanstack/react-router';
import App from '../App.tsx';
import HomePage from '../ui/pages/home/HomePage.tsx';
import NotFound from '../ui/pages/notFound/NotFound.tsx';

const rootRoute = new RootRoute({
  component: App,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFound,
});

const routeTree = rootRoute.addChildren([homeRoute]);

export const router = new Router({ routeTree, notFoundRoute });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
