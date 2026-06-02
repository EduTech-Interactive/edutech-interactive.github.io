import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import Projects from '../components/projects/projects'
import Homepage from '../components/homepage/homepage'
export const routeDefinitions = [

  createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Homepage
  }),

  createRoute({
    getParentRoute: () => rootRoute,
    path: '/projects',
    component: Projects,
  }),

]