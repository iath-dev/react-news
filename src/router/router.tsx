import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/home'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: ':category', Component: HomePage },
    ],
  },
])

export default router
