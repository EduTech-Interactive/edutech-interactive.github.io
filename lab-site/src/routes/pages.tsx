import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import Homepage from '../components/homepage/homepage'
import Partners from '../components/partners/partners'
import Resources from '../components/resources/resources'
import ResearchApproach from '../components/research-approach/research-approach'
import { About } from '../components/about/about'
import Projects from '../components/projects/projects'
import Blog from '../components/blog/blog'
import Podcast from '../components/podcast/podcast'
import Publications from '../components/publications/publications'
export const routeDefinitions = [

  //homepage
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Homepage
  }),

  //research approach
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/research-approach',
    component: ResearchApproach,
  }),

  //projects
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/projects',
    component: Projects,
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
    component: Podcast,
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