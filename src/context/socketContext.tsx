import { createContext } from 'react'

import { SocketInterface } from '../interfaces/socket'
import useSocket from '../hooks/useSocket'

type TypeSocketContext = { isOnline: boolean; socket: SocketInterface }

export const SocketContext = createContext<TypeSocketContext>(
  {} as TypeSocketContext
)

export default function TicketProvider({
  children,
}: {
  children: JSX.Element
}) {
  const { isOnline, socket } = useSocket('http://localhost:3000')

  return (
    <SocketContext.Provider value={{ isOnline, socket }}>
      {children}
    </SocketContext.Provider>
  )
}
