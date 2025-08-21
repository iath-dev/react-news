import RootLayout from '@/layouts/RootLayout'
import NotFoundPage from '@/pages/404'
import HomePage from '@/pages/home'
import { categoryLoader } from '@/utils/loader'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: ':category',
        Component: HomePage,
        loader: categoryLoader,
      },
    ],
  },
  {
    path: '/not-found',
    Component: NotFoundPage,
  },
])

export default router
