import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/shared/navbar'
import Footer from '../components/shared/ui/footer'
import { ToastContainer } from 'react-toastify'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const rootRoute = createRootRoute({
  component: () => (
    <>
        <Navbar></Navbar>
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </>
  ),
})