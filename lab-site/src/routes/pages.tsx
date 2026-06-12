import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import Homepage from '../components/homepage/homepage'
import Partners from '../components/partners/partners'
import Resources from '../components/resources/resources'
import ResearchProjects from '../components/research-projects/research-approach'
import { About } from '../components/about/about'
import GenAiApps from '../components/gen-ai-apps/gen-ai-apps'
import Blog from '../components/blog/blog'
import Podcasts from '../components/podcasts/podcasts'
import Publications from '../components/publications/publications'
import GamesAndSimulations from '../components/games-and-simulations/games-and-simulations'
export const routeDefinitions = [

  //homepage
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Homepage
  }),

  //research projects
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/research-projects',
    component: ResearchProjects,
  }),

  //games and simulations
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/games-and-simulations',
    component: GamesAndSimulations,
  }),

  //genai apps
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/gen-ai-apps',
    component: GenAiApps,
  }),

  //resources
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/resources',
    component: Resources,
  }),

  //blog
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/blog',
    component: Blog,
  }),

  //podcast
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/podcast',
    component: Podcasts,
  }),

  //podcast
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/publications',
    component: Publications,
  }),

  //collab
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/partners',
    component: Partners,
  }),

  //what we do
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: About,
  }),

]