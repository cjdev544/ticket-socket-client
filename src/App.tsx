import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import TicketProvider from './context/socketContext'
import CreateDesktop from './pages/CreateDesktop'
import TicketTurn from './pages/TicketTurn'
import CreateTicket from './pages/CreateTicket'
import Desktop from './pages/Desktop'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CreateDesktop />,
    },
    {
      path: '/ingresar',
      element: <CreateDesktop />,
    },
    {
      path: '/cola',
      element: <TicketTurn />,
    },
    {
      path: '/crear-ticket',
      element: <CreateTicket />,
    },
    {
      path: '/escritorio',
      element: <Desktop />,
    },
    {
      path: '/*',
      element: <CreateDesktop />,
    },
  ])

  return (
    <TicketProvider>
      <RouterProvider router={router} />
    </TicketProvider>
  )
}
