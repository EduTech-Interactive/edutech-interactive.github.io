import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import Homepage from '../components/homepage/homepage'
import Collaborate from '../components/collaborate/collaborate'
import Funding from '../components/funding/funding'
import Resources from '../components/resources/resources'
import MeetTheTeam from '../components/meet-the-team/meet-the-team'
import ResearchApproach from '../components/research-approach/research-approach'
import { WhatWeDo } from '../components/what-we-do/what-we-do'
import KnowledgeHub from '../components/knowledge-hub/knowledge-hub'
import Projects from '../components/projects/projects'
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

  //collab
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/collaborate',
    component: Collaborate,
  }),

  //funding/support
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/funding',
    component: Funding,
  }),

  //resources
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/resources',
    component: Resources,
  }),

  //knowledge hub
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/knowledge-hub',
    component: KnowledgeHub,
  }),

  //team
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/meet-the-team',
    component: MeetTheTeam,
  }),

  //what we do
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/what-we-do',
    component: WhatWeDo,
  }),

]