import { createRootRoute, Outlet, useMatches } from '@tanstack/react-router'
import Navbar from '../components/shared/navbar'
import Footer from '../components/shared/ui/footer'
import { ToastContainer } from 'react-toastify'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const rootRoute = createRootRoute({
  component: RootLayout,
})

function RootLayout() {

  const matches = useMatches();

  const hideFooter = matches.some(
    (m) => m.staticData?.hideFooter
  )


  return (
    <>
      <Navbar />
      <Outlet />
      {!hideFooter && <Footer />}
      <ToastContainer />
    </>
  )
}