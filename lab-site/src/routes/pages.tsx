import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import Projects from '../components/projects/projects'
import Homepage from '../components/homepage/homepage'
import CalculusBuddy from '../components/calculus-buddy/calculus-buddy'
import Collaborate from '../components/collaborate/collaborate'
import Funding from '../components/funding/funding'
import KnowledgeHubPreview from '../components/knowledge-hub-preview/knowledge-hub-preview'
import MeetTheTeam from '../components/meet-the-team/meet-the-team'
import ResearchApproach from '../components/research-approach/research-approach'
import { WhatWeDo } from '../components/what-we-do/what-we-do'
import KnowledgeHub from '../components/knowledge-hub/knowledge-hub'
export const routeDefinitions = [

  //homepage
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Homepage
  }),

  //projects root (will we need this?)
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/projects',
    component: Projects,
  }),

  //calc buddy
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/calculus-buddy',
    component: CalculusBuddy,
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

  //knowledge hub preview
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/knowledge-hub-preview',
    component: KnowledgeHubPreview,
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

  //research approach
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/research-approach',
    component: ResearchApproach,
  }),

  //what we do
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/what-we-do',
    component: WhatWeDo,
  }),

]