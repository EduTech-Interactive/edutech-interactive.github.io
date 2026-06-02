import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/shared/navbar'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const rootRoute = createRootRoute({
  component: () => (
    <>
        <Navbar></Navbar>
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
    </>
  ),
})