import { Outlet, createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import { LifeCycleRoute } from './pages/lifeCycle/LifeCyclePage'
import { MessageRoute } from './pages/message/MessagePage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Outlet />,
        children: [LifeCycleRoute, MessageRoute],
      },
    ],
  },
])
